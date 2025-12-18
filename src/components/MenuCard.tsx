import { useCart } from '../context/CartContext';
import type { MenuItem } from '../types';

interface MenuCardProps {
    item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
    const { addToCart } = useCart();

    return (
        <div className="card-light border border-black/10 mb-5 w-full md:w-[48%] lg:w-[30%] md:inline-block md:mr-[3%] md:align-top hover:bg-white/80 transition-colors">
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 md:h-56 object-cover opacity-85"
            />
            <h3 className="px-4 pt-4 pb-2.5 font-normal text-[#222] text-lg md:text-xl">{item.name}</h3>
            <p className="px-4 text-[#555] text-sm font-light leading-relaxed">{item.description}</p>
            <div className="flex flex-col sm:flex-row justify-between items-center px-4 pb-4 pt-2 gap-2">
                <span className="text-black font-normal text-xl">${item.price}</span>
                <button
                    onClick={() => addToCart(item)}
                    className="bg-black/70 text-white px-6 py-2.5 text-sm font-light hover:bg-black/90 border border-white/30 w-full sm:w-auto transition-colors"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default MenuCard;
