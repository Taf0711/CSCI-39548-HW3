import mongoose, { Document, Schema } from 'mongoose';
import { IMenuItem } from './MenuItem';

interface IOrderItem {
    menuItem: mongoose.Types.ObjectId | IMenuItem;
    name: string;
    price: number;
    quantity: number;
}

export interface IOrder extends Document {
    items: IOrderItem[];
    totalPrice: number;
    status: 'pending' | 'confirmed' | 'preparing' | 'completed' | 'cancelled';
    customerInfo?: {
        name?: string;
        email?: string;
        phone?: string;
    };
    createdAt: Date;
    updatedAt: Date;
}

const orderItemSchema = new Schema<IOrderItem>({
    menuItem: {
        type: Schema.Types.ObjectId,
        ref: 'MenuItem',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    }
});

const orderSchema = new Schema<IOrder>({
    items: [orderItemSchema],
    totalPrice: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'preparing', 'completed', 'cancelled'],
        default: 'pending'
    },
    customerInfo: {
        name: String,
        email: String,
        phone: String
    }
}, {
    timestamps: true
});

const Order = mongoose.model<IOrder>('Order', orderSchema);

export default Order;

