import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface HeaderProps {
    onCartClick: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { totalItems } = useCart();

    return (
        <header className="bg-black/80 p-5">
            <nav className="max-w-7xl mx-auto">
                <div className="logo text-white text-2xl font-light mb-2.5 tracking-[2px]">
                    Spice & Saffron
                </div>

                {/* Hamburger Menu */}
                <div
                    className="hamburger md:hidden cursor-pointer"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
                    <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                </div>

                {/* Navigation Links */}
                <ul
                    className={`nav-links list-none ${mobileMenuOpen ? 'block bg-black/90 py-5 md:bg-transparent md:py-0' : 'hidden'
                        } md:block`}
                >
                    <li className="inline-block mr-7 my-2.5 md:my-0">
                        <Link to="/" className="text-white/80 no-underline font-light hover:text-white">
                            Home
                        </Link>
                    </li>
                    <li className="inline-block mr-7 my-2.5 md:my-0">
                        <Link to="/menu" className="text-white/80 no-underline font-light hover:text-white">
                            Menu
                        </Link>
                    </li>
                    <li className="inline-block mr-7 my-2.5 md:my-0">
                        <Link to="/#about" className="text-white/80 no-underline font-light hover:text-white">
                            About
                        </Link>
                    </li>
                    <li className="inline-block mr-7 my-2.5 md:my-0">
                        <Link to="/contact" className="text-white/80 no-underline font-light hover:text-white">
                            Contact
                        </Link>
                    </li>
                    <li className="inline-block my-2.5 md:my-0">
                        <button
                            onClick={onCartClick}
                            className="text-white/80 font-light hover:text-white bg-transparent border-none cursor-pointer relative"
                        >
                            🛒 Cart
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
