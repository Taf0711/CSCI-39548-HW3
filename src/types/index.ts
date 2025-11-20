// Shared TypeScript interfaces and types

export interface MenuItem {
    id: number;
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
