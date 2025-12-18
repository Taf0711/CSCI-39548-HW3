import mongoose, { Document, Schema } from 'mongoose';

export interface IMenuItem extends Document {
    name: string;
    description: string;
    price: number;
    image: string;
    category: 'Curries' | 'Rice & Biryani';
    createdAt: Date;
    updatedAt: Date;
}

const menuItemSchema = new Schema<IMenuItem>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Curries', 'Rice & Biryani']
    }
}, {
    timestamps: true
});

const MenuItem = mongoose.model<IMenuItem>('MenuItem', menuItemSchema);

export default MenuItem;

