import { useState, useEffect } from 'react';
import { menuAPI } from '../services/api';
import { useCart } from '../context/CartContext';
import type { MenuItem } from '../types';

const Menu = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                setLoading(true);
                const items = await menuAPI.getAll();
                setMenuItems(items);
                setError(null);
            } catch (err) {
                setError('Failed to load menu items. Please try again later.');
                console.error('Error fetching menu:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    const curries = menuItems.filter(item => item.category === 'Curries');
    const riceAndBiryani = menuItems.filter(item => item.category === 'Rice & Biryani');

    if (loading) {
        return (
            <section className="py-16 px-5 max-w-7xl mx-auto bg-white min-h-screen">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#b8956a] mb-4"></div>
                    <p className="text-lg text-[#666]">Loading menu...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-16 px-5 max-w-7xl mx-auto bg-white min-h-screen">
                <div className="text-center">
                    <p className="text-lg text-red-600 mb-4">{error}</p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="bg-[#b8956a] text-white px-6 py-2 hover:bg-[#9a7a4f] transition-colors"
                    >
                        Retry
                    </button>
                </div>
            </section>
        );
    }

    const MenuItemCard = ({ item }: { item: MenuItem }) => (
        <div className="flex gap-4 mb-6 pb-6 border-b border-gray-200 last:border-b-0">
            <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-md flex-shrink-0"
            />
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg md:text-xl font-serif text-[#2c2c2c] mb-2">{item.name}</h3>
                    <p className="text-sm md:text-base text-[#666] mb-3 leading-relaxed">{item.description}</p>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-lg md:text-xl font-semibold text-[#2c2c2c]">${item.price.toFixed(2)}</span>
                    <button
                        onClick={() => addToCart(item)}
                        className="bg-[#a0442c] text-white px-6 py-2 rounded-md text-sm font-normal hover:bg-[#8a3a24] transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-5 md:px-8 py-12">
                {/* Left Column - Starters & Mains */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side */}
                    <div>
                        {/* Starters Section */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-serif text-[#2c2c2c] mb-6 pb-3 border-b-2 border-[#2c2c2c]">
                                STARTERS & SMALL PLATES
                            </h2>
                            <div>
                                {curries.slice(0, 2).map(item => (
                                    <MenuItemCard key={item._id} item={item} />
                                ))}
                            </div>
                        </section>

                        {/* Mains Section */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-serif text-[#2c2c2c] mb-6 pb-3 border-b-2 border-[#2c2c2c]">
                                MAINS & CURRIES
                            </h2>
                            <div>
                                {curries.slice(2).map(item => (
                                    <MenuItemCard key={item._id} item={item} />
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Side */}
                    <div>
                        {/* Rice & Biryani Section */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-serif text-[#2c2c2c] mb-6 pb-3 border-b-2 border-[#2c2c2c]">
                                BREADS & SIDES
                            </h2>
                            <div>
                                {riceAndBiryani.slice(0, 2).map(item => (
                                    <MenuItemCard key={item._id} item={item} />
                                ))}
                            </div>
                        </section>

                        {/* Desserts Section */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-serif text-[#2c2c2c] mb-6 pb-3 border-b-2 border-[#2c2c2c]">
                                DESSERTS & DRINKS
                            </h2>
                            <div>
                                {riceAndBiryani.slice(2).map(item => (
                                    <MenuItemCard key={item._id} item={item} />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
