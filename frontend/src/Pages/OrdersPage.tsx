
import { useEffect, useState } from 'react';
import Navbar from './NavbarPage';
import '../styles/OrdersPage.css';

// Đổi đường dẫn này theo vị trí Axios instance thực tế trong project của bạn.
import api from '../services/api';

type OrderStatus = 'pending' | 'confirmed' | 'shipping' | 'cancelled';

interface Order {
    id: number;
    shop: {
        userName: string;
    };
    status: OrderStatus;
    total: number | string;
    createdAt: string;
}

interface OrderItem {
    id: number;
    product: {
        name: string;
    };
    quantity: number;
    price: number | string;
}

const statusInfo: Record<OrderStatus, { label: string; className: string }> = {
    pending: {
        label: 'Chờ xác nhận',
        className: 'pending',
    },
    confirmed: {
        label: 'Đã xác nhận',
        className: 'confirmed',
    },
    shipping: {
        label: 'Đang giao hàng',
        className: 'shipping',
    },
    cancelled: {
        label: 'Đã hủy',
        className: 'cancelled',
    },
};

const formatPrice = (price: number | string) =>
    Number(price).toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
        maximumFractionDigits: 0,
    });

const formatDate = (date: string) =>
    new Date(date).toLocaleString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

// Hỗ trợ cả response.data và response.data.data
const getPayload = <T,>(response: any): T =>
    (response.data?.data ?? response.data) as T;

export default function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [expandedOrderId, setExpandedOrderId] = useState<number | null>(null);
    const [orderItems, setOrderItems] = useState<Record<number, OrderItem[]>>({});
    const [loadingItemsId, setLoadingItemsId] = useState<number | null>(null);
    const [itemErrors, setItemErrors] = useState<Record<number, string>>({});

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);
                setError('');

                const response = await api.get('/orders');
                const data = getPayload<Order[]>(response);

                setOrders(Array.isArray(data) ? data : []);
            } catch (err: any) {
                setError(
                    err.response?.data?.message ??
                    'Không thể tải danh sách đơn hàng. Vui lòng thử lại.',
                );
            } finally {
                setLoading(false);
            }
        };

        void fetchOrders();
    }, []);

    const handleToggleItems = async (orderId: number) => {
        // Nếu đang mở đơn này thì đóng lại.
        if (expandedOrderId === orderId) {
            setExpandedOrderId(null);
            return;
        }

        setExpandedOrderId(orderId);

        // Nếu đã tải chi tiết trước đó thì dùng dữ liệu đã lưu.
        if (orderItems[orderId]) return;

        try {
            setLoadingItemsId(orderId);
            setItemErrors((previous) => ({
                ...previous,
                [orderId]: '',
            }));

            const response = await api.get(`/orders/${orderId}/items`);
            const data = getPayload<OrderItem[]>(response);

            setOrderItems((previous) => ({
                ...previous,
                [orderId]: Array.isArray(data) ? data : [],
            }));
        } catch (err: any) {
            setItemErrors((previous) => ({
                ...previous,
                [orderId]:
                    err.response?.data?.message ??
                    'Không thể tải chi tiết đơn hàng.',
            }));
        } finally {
            setLoadingItemsId(null);
        }
    };

    return (
        <div className="orders-page">
            <Navbar />

            <main className="orders-container">
                <header className="orders-header">
                    <div>
                        <p className="orders-eyebrow">TÀI KHOẢN CỦA BẠN</p>
                        <h1>Đơn hàng của tôi</h1>
                        <p className="orders-subtitle">
                            Theo dõi trạng thái và xem chi tiết các đơn hàng đã đặt.
                        </p>
                    </div>

                    {!loading && (
                        <div className="orders-count">
                            <span>{orders.length}</span>
                            <small>đơn hàng</small>
                        </div>
                    )}
                </header>

                {loading && (
                    <div className="orders-message">
                        <span className="orders-spinner" />
                        <p>Đang tải danh sách đơn hàng...</p>
                    </div>
                )}

                {!loading && error && (
                    <div className="orders-message orders-error">
                        <p>{error}</p>
                        <button
                            type="button"
                            onClick={() => window.location.reload()}
                        >
                            Thử lại
                        </button>
                    </div>
                )}

                {!loading && !error && orders.length === 0 && (
                    <div className="orders-empty">
                        <div className="orders-empty-icon">🛍️</div>
                        <h2>Bạn chưa có đơn hàng nào</h2>
                        <p>Các đơn hàng bạn đặt sẽ xuất hiện tại đây.</p>
                    </div>
                )}

                {!loading && !error && orders.length > 0 && (
                    <section className="orders-list">
                        {orders.map((order) => {
                            const status = statusInfo[order.status];
                            const isExpanded = expandedOrderId === order.id;

                            return (
                                <article className="order-card" key={order.id}>
                                    <div className="order-card-header">
                                        <div className="order-meta">
                                            <span className="order-number">
                                                Đơn hàng #{order.id}
                                            </span>
                                            <span className="order-date">
                                                {formatDate(order.createdAt)}
                                            </span>
                                        </div>

                                        <span
                                            className={`order-status ${status?.className ?? 'pending'}`}
                                        >
                                            {status?.label ?? order.status}
                                        </span>
                                    </div>

                                    <div className="order-card-body">
                                        <div className="order-shop">
                                            <span className="order-shop-icon">🏪</span>
                                            <div>
                                                <small>Người bán</small>
                                                <strong>
                                                    {order.shop?.userName ?? 'Shop'}
                                                </strong>
                                            </div>
                                        </div>

                                        <div className="order-total">
                                            <small>Tổng thanh toán</small>
                                            <strong>{formatPrice(order.total)}</strong>
                                        </div>
                                    </div>

                                    <div className="order-card-footer">
                                        <span className="order-footer-note">
                                            Mã đơn: #{order.id}
                                        </span>

                                        <button
                                            type="button"
                                            className="order-detail-button"
                                            onClick={() => handleToggleItems(order.id)}
                                        >
                                            {isExpanded
                                                ? 'Ẩn chi tiết'
                                                : 'Xem chi tiết'}
                                            <span>{isExpanded ? '−' : '+'}</span>
                                        </button>
                                    </div>

                                    {isExpanded && (
                                        <div className="order-items-panel">
                                            <h3>Chi tiết đơn hàng</h3>

                                            {loadingItemsId === order.id && (
                                                <p className="order-items-message">
                                                    Đang tải sản phẩm...
                                                </p>
                                            )}

                                            {itemErrors[order.id] && (
                                                <div className="order-items-error">
                                                    <p>{itemErrors[order.id]}</p>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setOrderItems((previous) => {
                                                                const next = { ...previous };
                                                                delete next[order.id];
                                                                return next;
                                                            });
                                                            void handleToggleItems(order.id);
                                                        }}
                                                    >
                                                        Thử lại
                                                    </button>
                                                </div>
                                            )}

                                            {loadingItemsId !== order.id &&
                                                !itemErrors[order.id] &&
                                                orderItems[order.id] && (
                                                    <>
                                                        {orderItems[order.id].length === 0 ? (
                                                            <p className="order-items-message">
                                                                Đơn hàng chưa có sản phẩm chi tiết.
                                                            </p>
                                                        ) : (
                                                            <div className="order-items-list">
                                                                {orderItems[order.id].map((item) => (
                                                                    <div
                                                                        className="order-item"
                                                                        key={item.id}
                                                                    >
                                                                        <div className="order-item-info">
                                                                            <strong>
                                                                                {item.product?.name ??
                                                                                    'Sản phẩm không còn tồn tại'}
                                                                            </strong>
                                                                            <span>
                                                                                Số lượng: {item.quantity}
                                                                            </span>
                                                                        </div>

                                                                        <div className="order-item-price">
                                                                            <span>
                                                                                {formatPrice(item.price)}
                                                                            </span>
                                                                            <strong>
                                                                                {formatPrice(
                                                                                    Number(item.price) *
                                                                                    item.quantity,
                                                                                )}
                                                                            </strong>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </>
                                                )}
                                        </div>
                                    )}
                                </article>
                            );
                        })}
                    </section>
                )}
            </main>
        </div>
    );
}
