import { Request, Response } from 'express';
import MenuItem from '../models/MenuItem.js';

// @desc    Get all menu items
// @route   GET /api/menu
// @access  Public
export const getMenuItems = async (req: Request, res: Response): Promise<void> => {
    try {
        const menuItems = await MenuItem.find({});
        res.json(menuItems);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: 'Error fetching menu items', error: message });
    }
};

// @desc    Get menu items by category
// @route   GET /api/menu/category/:category
// @access  Public
export const getMenuItemsByCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { category } = req.params;
        const menuItems = await MenuItem.find({ category });
        res.json(menuItems);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: 'Error fetching menu items', error: message });
    }
};

// @desc    Get single menu item
// @route   GET /api/menu/:id
// @access  Public
export const getMenuItemById = async (req: Request, res: Response): Promise<void> => {
    try {
        const menuItem = await MenuItem.findById(req.params.id);
        
        if (!menuItem) {
            res.status(404).json({ message: 'Menu item not found' });
            return;
        }
        
        res.json(menuItem);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: 'Error fetching menu item', error: message });
    }
};

// @desc    Create menu item
// @route   POST /api/menu
// @access  Private (for now public for demo)
export const createMenuItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, description, price, image, category } = req.body;
        
        const menuItem = await MenuItem.create({
            name,
            description,
            price,
            image,
            category
        });
        
        res.status(201).json(menuItem);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        res.status(400).json({ message: 'Error creating menu item', error: message });
    }
};

// @desc    Update menu item
// @route   PUT /api/menu/:id
// @access  Private (for now public for demo)
export const updateMenuItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const menuItem = await MenuItem.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!menuItem) {
            res.status(404).json({ message: 'Menu item not found' });
            return;
        }
        
        res.json(menuItem);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        res.status(400).json({ message: 'Error updating menu item', error: message });
    }
};

// @desc    Delete menu item
// @route   DELETE /api/menu/:id
// @access  Private (for now public for demo)
export const deleteMenuItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
        
        if (!menuItem) {
            res.status(404).json({ message: 'Menu item not found' });
            return;
        }
        
        res.json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: 'Error deleting menu item', error: message });
    }
};

