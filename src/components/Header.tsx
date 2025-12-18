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
        <header className="bg-[#f5f1e8] border-b border-[#d4c5a0] shadow-sm sticky top-0 z-40">
            <nav className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left Navigation */}
                    <ul className="hidden md:flex items-center space-x-8 flex-1">
                        <li>
                            <Link to="/menu" className="text-[#2c2c2c] text-sm font-normal hover:text-[#b8956a] transition-colors">
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link to="/#about" className="text-[#2c2c2c] text-sm font-normal hover:text-[#b8956a] transition-colors">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-[#2c2c2c] text-sm font-normal hover:text-[#b8956a] transition-colors">
                                Reservations
                            </Link>
                        </li>
                    </ul>

                    {/* Center Logo */}
                    <div className="flex-1 text-center">
                        <Link to="/" className="text-[#b8956a] text-3xl md:text-4xl font-serif tracking-wide no-underline hover:text-[#9a7a4f] transition-colors">
                            Spice & Saffron
                        </Link>
                    </div>

                    {/* Right Navigation */}
                    <ul className="hidden md:flex items-center space-x-8 flex-1 justify-end">
                        <li>
                            <Link to="/menu" className="text-[#2c2c2c] text-sm font-normal hover:text-[#b8956a] transition-colors">
                                Order Online
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-[#2c2c2c] text-sm font-normal hover:text-[#b8956a] transition-colors">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={onCartClick}
                                className="text-[#2c2c2c] text-sm font-normal hover:text-[#b8956a] bg-transparent border-none cursor-pointer relative transition-colors"
                            >
                                Cart ({totalItems}) 🛒
                            </button>
                        </li>
                    </ul>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-[#2c2c2c] p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-[#d4c5a0] pt-4">
                        <ul className="space-y-3">
                            <li>
                                <Link to="/menu" className="block text-[#2c2c2c] text-sm font-normal hover:text-[#b8956a]" onClick={() => setMobileMenuOpen(false)}>
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link to="/#about" className="block text-[#2c2c2c] text-sm font-normal hover:text-[#b8956a]" onClick={() => setMobileMenuOpen(false)}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="block text-[#2c2c2c] text-sm font-normal hover:text-[#b8956a]" onClick={() => setMobileMenuOpen(false)}>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => { onCartClick(); setMobileMenuOpen(false); }}
                                    className="block text-[#2c2c2c] text-sm font-normal hover:text-[#b8956a] bg-transparent border-none cursor-pointer"
                                >
                                    Cart ({totalItems})
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
