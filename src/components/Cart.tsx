import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { orderAPI } from '../services/api';

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
    const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);

    const handleCheckout = async () => {
        if (cart.length === 0) return;

        setIsSubmitting(true);
        try {
            const orderData = {
                items: cart.map(item => ({
                    menuItemId: item._id,
                    quantity: item.quantity
                })),
                customerInfo: {
                    name: 'Guest',
                    email: 'guest@example.com'
                }
            };

            await orderAPI.create(orderData);
            setOrderSuccess(true);
            clearCart();
            
            // Reset success message after 3 seconds
            setTimeout(() => {
                setOrderSuccess(false);
                onClose();
            }, 3000);
        } catch (error) {
            console.error('Error placing order:', error);
            alert('Failed to place order. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={onClose}
            />

            {/* Cart Sidebar */}
            <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-[#f5f1e8] z-50 shadow-2xl overflow-y-auto">
                <div className="p-5 md:p-6">
                    <div className="flex justify-between items-center mb-5 md:mb-6 pb-4 border-b border-[#d4c5a0]">
                        <h2 className="text-xl md:text-2xl font-serif text-[#2c2c2c] tracking-wide">Shopping Cart</h2>
                        <button
                            onClick={onClose}
                            className="text-3xl md:text-4xl text-[#666] hover:text-[#2c2c2c] touch-manipulation"
                            aria-label="Close cart"
                        >
                            ×
                        </button>
                    </div>

                    {orderSuccess ? (
                        <div className="text-center py-8 md:py-10 bg-white p-6 rounded shadow-sm">
                            <div className="text-green-600 text-lg md:text-xl mb-2">
                                ✓ Order Placed Successfully!
                            </div>
                            <p className="text-[#666] text-sm md:text-base">
                                Thank you for your order.
                            </p>
                        </div>
                    ) : cart.length === 0 ? (
                        <p className="text-[#666] text-center py-8 md:py-10 text-sm md:text-base">Your cart is empty</p>
                    ) : (
                        <>
                            {/* Cart Items */}
                            <div className="space-y-3 md:space-y-4 mb-5 md:mb-6">
                                {cart.map(item => (
                                    <div
                                        key={item._id}
                                        className="bg-white border border-[#d4c5a0] p-3 md:p-4 shadow-sm"
                                    >
                                        <div className="flex gap-3 md:gap-4">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-serif text-[#2c2c2c] mb-1 text-sm md:text-base truncate">{item.name}</h3>
                                                <p className="text-xs md:text-sm text-[#666] mb-2">
                                                    ${item.price.toFixed(2)}
                                                </p>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <div className="flex items-center gap-2 border border-[#d4c5a0] rounded">
                                                        <button
                                                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                                            className="bg-white hover:bg-[#f5f1e8] w-8 h-8 flex items-center justify-center text-[#2c2c2c] touch-manipulation"
                                                            aria-label="Decrease quantity"
                                                        >
                                                            −
                                                        </button>
                                                        <span className="w-8 text-center text-sm md:text-base text-[#2c2c2c]">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                                            className="bg-white hover:bg-[#f5f1e8] w-8 h-8 flex items-center justify-center text-[#2c2c2c] touch-manipulation"
                                                            aria-label="Increase quantity"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <button
                                                        onClick={() => removeFromCart(item._id)}
                                                        className="ml-auto text-[#a0442c] hover:text-[#8a3a24] text-xs md:text-sm touch-manipulation"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Cart Summary */}
                            <div className="border-t border-[#d4c5a0] pt-4 mt-5 md:mt-6">
                                <div className="flex justify-between mb-4 items-center">
                                    <span className="text-base md:text-lg font-serif text-[#2c2c2c]">Total:</span>
                                    <span className="text-lg md:text-xl font-semibold text-[#2c2c2c]">${totalPrice.toFixed(2)}</span>
                                </div>

                                <button 
                                    className="w-full bg-[#a0442c] text-white py-3 text-sm md:text-base font-normal hover:bg-[#8a3a24] transition-colors mb-3 touch-manipulation"
                                    onClick={handleCheckout}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Processing...' : 'Checkout'}
                                </button>

                                <button
                                    onClick={clearCart}
                                    className="w-full bg-transparent border border-[#d4c5a0] text-[#2c2c2c] py-3 text-sm md:text-base hover:bg-white transition-colors touch-manipulation"
                                >
                                    Clear Cart
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
