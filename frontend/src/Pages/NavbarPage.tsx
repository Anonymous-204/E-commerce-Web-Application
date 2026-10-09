
import '../styles/NavbarPage.css';

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../services/authContext';

interface CartItem {
    itemId: number;
    productId: number;
    quantity: number;
    name: string;
    image: string | null;
    price: number | string;
}

export default function Navbar() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [clearing, setClearing] = useState(false);
    const [error, setError] = useState('');

    const cartRef = useRef<HTMLDivElement>(null);
    const userRef = useRef<HTMLDivElement>(null);

    const loadCart = async () => {
        setLoading(true);
        setError('');

        try {
            const response = await api.get('/carts/items');
            const payload = response.data?.data ?? response.data;

            // Support either a direct array or a wrapped array response.
            const items = Array.isArray(payload)
                ? payload
                : Array.isArray(payload?.items)
                    ? payload.items
                    : [];

            setCartItems(items);
        } catch (error) {
            console.error('Failed to load cart:', error);
            setError('Could not load your cart.');
        } finally {
            setLoading(false);
        }
    };

    const toggleCart = () => {
        const willOpen = !cartOpen;

        setCartOpen(willOpen);
        setUserMenuOpen(false);

        if (willOpen) {
            void loadCart();
        }
    };

    const clearCart = async () => {
        if (cartItems.length === 0) return;

        setClearing(true);
        setError('');

        try {
            await api.delete('/carts');
            setCartItems([]);
        } catch (error) {
            console.error('Failed to clear cart:', error);
            setError('Could not clear your cart.');
        } finally {
            setClearing(false);
        }
    };

    const logoutHandle = async () => {
        try {
            await api.post('/auth/signout');
        } catch (error) {
            console.error('Logout error:', error);
        }

        navigate('/signin');
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const target = event.target as Node;

            if (cartRef.current && !cartRef.current.contains(target)) {
                setCartOpen(false);
            }

            if (userRef.current && !userRef.current.contains(target)) {
                setUserMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const totalQuantity = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const subtotal = cartItems.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0
    );

    const formatPrice = (price: number | string) =>
        new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            maximumFractionDigits: 0
        }).format(Number(price));

    return (
        <nav className="navbar">
            <div className="logo" onClick={() => navigate('/')}>
                ECWA
            </div>

            <div className="info">
                <h4 onClick={() => navigate('/products')}>Products</h4>
                <h4>Categories</h4>
                <h4>Brands</h4>
            </div>

            <div className="personal">
                <input type="text" placeholder="Search..." />

                {/* CART */}
                <div className="navbar-cart-wrap" ref={cartRef}>
                    <button
                        type="button"
                        className="navbar-cart-button"
                        onClick={toggleCart}
                        aria-label="Open shopping cart"
                        aria-expanded={cartOpen}
                    >
                        🛒
                        {totalQuantity > 0 && (
                            <span className="navbar-cart-badge">
                                {totalQuantity}
                            </span>
                        )}
                    </button>

                    {cartOpen && (
                        <div className="cart-dropdown">
                            <div className="cart-header">
                                <h3>Your Cart</h3>
                                <span>
                                    {totalQuantity}{' '}
                                    {totalQuantity === 1 ? 'item' : 'items'}
                                </span>
                            </div>

                            {loading ? (
                                <p className="cart-message">
                                    Loading cart...
                                </p>
                            ) : error ? (
                                <div className="cart-message cart-error">
                                    <p>{error}</p>
                                    <button
                                        type="button"
                                        onClick={() => void loadCart()}
                                    >
                                        Try again
                                    </button>
                                </div>
                            ) : cartItems.length === 0 ? (
                                <p className="cart-message">
                                    Your cart is empty.
                                </p>
                            ) : (
                                <>
                                    <div className="cart-items">
                                        {cartItems.map(item => (
                                            <div
                                                className="cart-item"
                                                key={item.itemId}
                                            >
                                                {item.image ? (
                                                    <img
                                                        className="cart-item-image"
                                                        src={item.image}
                                                        alt={item.name}
                                                    />
                                                ) : (
                                                    <div className="cart-item-image cart-image-placeholder">
                                                        No image
                                                    </div>
                                                )}

                                                <div className="cart-item-info">
                                                    <button
                                                        type="button"
                                                        className="cart-item-name"
                                                        onClick={() => {
                                                            setCartOpen(false);
                                                            navigate(
                                                                `/products/${item.productId}`
                                                            );
                                                        }}
                                                    >
                                                        {item.name}
                                                    </button>

                                                    <p className="cart-item-detail">
                                                        Qty: {item.quantity}
                                                    </p>

                                                    <p className="cart-item-unit-price">
                                                        {formatPrice(item.price)} each
                                                    </p>
                                                </div>

                                                <span className="cart-item-price">
                                                    {formatPrice(
                                                        Number(item.price) *
                                                        item.quantity
                                                    )}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="cart-subtotal">
                                        <span>Subtotal</span>
                                        <strong>
                                            {formatPrice(subtotal)}
                                        </strong>
                                    </div>

                                    <button
                                        type="button"
                                        className="cart-clear-button"
                                        onClick={() => void clearCart()}
                                        disabled={clearing}
                                    >
                                        {clearing ? 'Clearing...' : 'Clear cart'}
                                    </button>

                                    <button
                                        type="button"
                                        className="cart-view-button"
                                        onClick={() => {
                                            setCartOpen(false);
                                            navigate('/cart');
                                        }}
                                    >
                                        View Cart / Checkout
                                    </button>
                                </>
                            )}
                        </div>
                    )}
                </div>

                {/* USER MENU */}
                <div className="user" ref={userRef}>
                    <button
                        type="button"
                        className="navbar-user-button"
                        onClick={() => {
                            setUserMenuOpen(!userMenuOpen);
                            setCartOpen(false);
                        }}
                        aria-label="Open user menu"
                        aria-expanded={userMenuOpen}
                    >
                        👤
                    </button>

                    {userMenuOpen && (
                        <div className="user-menu">
                            <button onClick={() => navigate('/profile')}>
                                ✎ Profile
                            </button>

                            <button onClick={() => navigate('/settings')}>
                                ⚙️ Settings
                            </button>

                            <button onClick={() => navigate('/orders')}>
                                📦 Orders
                            </button>

                            {(user?.role === 'admin' ||
                                user?.role === 'shop') && (
                                <button onClick={() => navigate('/my-products')}>
                                    🛠️ My Products
                                </button>
                            )}

                            <button onClick={() => void logoutHandle()}>
                                🚪 Sign Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
