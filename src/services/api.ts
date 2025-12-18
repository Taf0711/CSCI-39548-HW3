import type { MenuItem, Order } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Menu API
export const menuAPI = {
    // Get all menu items
    getAll: async (): Promise<MenuItem[]> => {
        const response = await fetch(`${API_BASE_URL}/menu`);
        if (!response.ok) {
            throw new Error('Failed to fetch menu items');
        }
        return response.json();
    },

    // Get menu items by category
    getByCategory: async (category: string): Promise<MenuItem[]> => {
        const response = await fetch(`${API_BASE_URL}/menu/category/${category}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${category} items`);
        }
        return response.json();
    },

    // Get single menu item
    getById: async (id: string): Promise<MenuItem> => {
        const response = await fetch(`${API_BASE_URL}/menu/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch menu item');
        }
        return response.json();
    },
};

// Order API
export const orderAPI = {
    // Create new order
    create: async (order: Order): Promise<any> => {
        const response = await fetch(`${API_BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        });
        if (!response.ok) {
            throw new Error('Failed to create order');
        }
        return response.json();
    },

    // Get all orders
    getAll: async (): Promise<any[]> => {
        const response = await fetch(`${API_BASE_URL}/orders`);
        if (!response.ok) {
            throw new Error('Failed to fetch orders');
        }
        return response.json();
    },

    // Get single order
    getById: async (id: string): Promise<any> => {
        const response = await fetch(`${API_BASE_URL}/orders/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch order');
        }
        return response.json();
    },
};

