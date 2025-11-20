// Menu data from HW1
import type { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
    // Curries
    {
        id: 1,
        name: 'Butter Chicken Rendang',
        description: 'Indian butter chicken with Malaysian spices',
        price: 28,
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
        category: 'Curries',
    },
    {
        id: 2,
        name: 'Lamb Rogan Josh',
        description: 'Tender lamb in aromatic curry',
        price: 32,
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop',
        category: 'Curries',
    },
    {
        id: 3,
        name: 'Paneer Tikka',
        description: 'Grilled paneer with spices',
        price: 24,
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
        category: 'Curries',
    },
    // Rice & Biryani
    {
        id: 4,
        name: 'Chicken Biryani',
        description: 'Fragrant rice with spiced chicken',
        price: 27,
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop',
        category: 'Rice & Biryani',
    },
    {
        id: 5,
        name: 'Nasi Goreng',
        description: 'Malaysian fried rice',
        price: 25,
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop',
        category: 'Rice & Biryani',
    },
    {
        id: 6,
        name: 'Lamb Biryani',
        description: 'Slow-cooked lamb with rice',
        price: 34,
        image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop',
        category: 'Rice & Biryani',
    },
];

export const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1000&h=600&fit=crop', alt: 'Curry' },
    { url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1000&h=600&fit=crop', alt: 'Biryani' },
    { url: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=1000&h=600&fit=crop', alt: 'Satay' },
    { url: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=1000&h=600&fit=crop', alt: 'Tandoori' },
    { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&h=600&fit=crop', alt: 'Restaurant' },
    { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&h=600&fit=crop', alt: 'Dining' },
];
