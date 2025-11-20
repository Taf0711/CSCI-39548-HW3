import { menuItems } from '../data/menuData';
import MenuCard from '../components/MenuCard';

const Menu = () => {
    const curries = menuItems.filter(item => item.category === 'Curries');
    const riceAndBiryani = menuItems.filter(item => item.category === 'Rice & Biryani');

    return (
        <section className="py-16 px-5 max-w-7xl mx-auto">
            <h1 className="text-center text-4xl mb-10 font-light text-[#222] tracking-[3px]">
                Our Menu
            </h1>

            {/* Curries */}
            <h2 className="text-3xl text-black mt-10 mb-5 border-b border-black/30 pb-2.5 font-light tracking-[2px]">
                Curries
            </h2>
            <div className="mb-10">
                {curries.map(item => (
                    <MenuCard key={item.id} item={item} />
                ))}
            </div>

            {/* Rice & Biryani */}
            <h2 className="text-3xl text-black mt-10 mb-5 border-b border-black/30 pb-2.5 font-light tracking-[2px]">
                Rice & Biryani
            </h2>
            <div className="mb-10">
                {riceAndBiryani.map(item => (
                    <MenuCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default Menu;
