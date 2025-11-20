import { useCart } from '../context/CartContext';

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
    const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={onClose}
            />

            {/* Cart Sidebar */}
            <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white z-50 shadow-2xl overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-light tracking-wide">Shopping Cart</h2>
                        <button
                            onClick={onClose}
                            className="text-3xl font-light text-gray-500 hover:text-black"
                        >
                            ×
                        </button>
                    </div>

                    {cart.length === 0 ? (
                        <p className="text-gray-500 text-center py-10 font-light">Your cart is empty</p>
                    ) : (
                        <>
                            {/* Cart Items */}
                            <div className="space-y-4 mb-6">
                                {cart.map(item => (
                                    <div
                                        key={item.id}
                                        className="card-light border border-black/10 p-4"
                                    >
                                        <div className="flex gap-4">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover opacity-85"
                                            />
                                            <div className="flex-1">
                                                <h3 className="font-normal mb-1">{item.name}</h3>
                                                <p className="text-sm text-gray-600 font-light mb-2">
                                                    ${item.price}
                                                </p>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="bg-black/10 hover:bg-black/20 w-7 h-7 flex items-center justify-center font-light"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="w-8 text-center font-light">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="bg-black/10 hover:bg-black/20 w-7 h-7 flex items-center justify-center font-light"
                                                    >
                                                        +
                                                    </button>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="ml-auto text-red-600 hover:text-red-800 font-light"
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
                            <div className="border-t border-black/30 pt-4 mt-6">
                                <div className="flex justify-between mb-4">
                                    <span className="text-lg font-light">Total:</span>
                                    <span className="text-xl font-normal">${totalPrice.toFixed(2)}</span>
                                </div>

                                <button className="btn w-full mb-3">
                                    Checkout
                                </button>

                                <button
                                    onClick={clearCart}
                                    className="w-full bg-transparent border border-black/30 text-black py-3 font-light hover:bg-black/10"
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
