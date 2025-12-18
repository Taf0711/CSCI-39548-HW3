// Shared TypeScript interfaces and types

export interface MenuItem {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: 'Curries' | 'Rice & Biryani';
}

export interface CartItem extends MenuItem {
    quantity: number;
}

export interface SlideImage {
    url: string;
    alt: string;
}

export interface OrderItem {
    menuItemId: string;
    quantity: number;
}

export interface Order {
    items: OrderItem[];
    customerInfo?: {
        name?: string;
        email?: string;
        phone?: string;
    };
}
