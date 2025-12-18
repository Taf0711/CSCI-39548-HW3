import { Request, Response } from 'express';
import Order from '../models/Order.js';
import MenuItem from '../models/MenuItem.js';

interface OrderItemInput {
    menuItemId: string;
    quantity: number;
}

interface CreateOrderBody {
    items: OrderItemInput[];
    customerInfo?: {
        name?: string;
        email?: string;
        phone?: string;
    };
}

// @desc    Create new order
// @route   POST /api/orders
// @access  Public
export const createOrder = async (req: Request<{}, {}, CreateOrderBody>, res: Response): Promise<void> => {
    try {
        const { items, customerInfo } = req.body;
        
        if (!items || items.length === 0) {
            res.status(400).json({ message: 'Order must contain at least one item' });
            return;
        }
        
        // Verify all menu items exist and calculate total
        let totalPrice = 0;
        const orderItems = [];
        
        for (const item of items) {
            const menuItem = await MenuItem.findById(item.menuItemId);
            
            if (!menuItem) {
                res.status(404).json({ message: `Menu item with ID ${item.menuItemId} not found` });
                return;
            }
            
            orderItems.push({
                menuItem: menuItem._id,
                name: menuItem.name,
                price: menuItem.price,
                quantity: item.quantity
            });
            
            totalPrice += menuItem.price * item.quantity;
        }
        
        const order = await Order.create({
            items: orderItems,
            totalPrice,
            customerInfo,
            status: 'pending'
        });
        
        // Populate menu item details
        await order.populate('items.menuItem');
        
        res.status(201).json(order);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        res.status(400).json({ message: 'Error creating order', error: message });
    }
};

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private (for now public for demo)
export const getOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const orders = await Order.find({})
            .populate('items.menuItem')
            .sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: 'Error fetching orders', error: message });
    }
};

// @desc    Get single order
// @route   GET /api/orders/:id
// @access  Public
export const getOrderById = async (req: Request, res: Response): Promise<void> => {
    try {
        const order = await Order.findById(req.params.id).populate('items.menuItem');
        
        if (!order) {
            res.status(404).json({ message: 'Order not found' });
            return;
        }
        
        res.json(order);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: 'Error fetching order', error: message });
    }
};

// @desc    Update order status
// @route   PUT /api/orders/:id
// @access  Private (for now public for demo)
export const updateOrderStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        const { status } = req.body;
        
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        ).populate('items.menuItem');
        
        if (!order) {
            res.status(404).json({ message: 'Order not found' });
            return;
        }
        
        res.json(order);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        res.status(400).json({ message: 'Error updating order', error: message });
    }
};

