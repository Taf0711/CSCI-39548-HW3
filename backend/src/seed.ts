import dotenv from 'dotenv';
import connectDB from './config/database';
import MenuItem from './models/MenuItem';

// Load environment variables
dotenv.config();

// Menu items data based on the frontend data
const menuItems = [
    // Curries
    {
        name: 'Butter Chicken Rendang',
        description: 'Indian butter chicken with Malaysian spices',
        price: 28,
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
        category: 'Curries',
    },
    {
        name: 'Lamb Rogan Josh',
        description: 'Tender lamb in aromatic curry',
        price: 32,
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop',
        category: 'Curries',
    },
    {
        name: 'Paneer Tikka',
        description: 'Grilled paneer with spices',
        price: 24,
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
        category: 'Curries',
    },
    // Rice & Biryani
    {
        name: 'Chicken Biryani',
        description: 'Fragrant rice with spiced chicken',
        price: 27,
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop',
        category: 'Rice & Biryani',
    },
    {
        name: 'Nasi Goreng',
        description: 'Malaysian fried rice',
        price: 25,
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop',
        category: 'Rice & Biryani',
    },
    {
        name: 'Lamb Biryani',
        description: 'Slow-cooked lamb with rice',
        price: 34,
        image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop',
        category: 'Rice & Biryani',
    },
];

const seedDatabase = async () => {
    try {
        await connectDB();

        console.log('Clearing existing menu items...');
        await MenuItem.deleteMany({});

        console.log('Seeding menu items...');
        const createdItems = await MenuItem.insertMany(menuItems);

        console.log(`Successfully seeded ${createdItems.length} menu items:`);
        createdItems.forEach(item => {
            console.log(`- ${item.name} (${item.category})`);
        });

        console.log('\nDatabase seeding completed!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();

