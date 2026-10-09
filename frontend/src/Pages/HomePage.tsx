
import { useEffect, useState } from "react";
import Navbar from "./NavbarPage";
import { useAuth } from "../services/authContext";
import api from "../services/api";
import "../styles/HomePage.css";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string | null;
}

interface ProductDetail {
    id: number;
    name: string;
    price: number;
    quantity: number;
    description: string | null;
    image: string | null;
    category: string;
    brand: string;
}

export default function HomePage() {
    const { user } = useAuth();

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Product detail modal
    const [selectedProduct, setSelectedProduct] =
        useState<ProductDetail | null>(null);

    const [detailLoading, setDetailLoading] = useState(false);
    const [detailError, setDetailError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);

                const response = await api.get("/products/all");

                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Không thể tải danh sách sản phẩm.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleProductClick = async (productId: number) => {
        try {
            setDetailLoading(true);
            setDetailError("");

            const response = await api.get(
                `/products/info/${productId}`
            );

            setSelectedProduct(response.data);
        } catch (error) {
            console.error("Error fetching product detail:", error);
            setDetailError("Không thể tải thông tin sản phẩm.");
        } finally {
            setDetailLoading(false);
        }
    };
    const addHandle = async () => {
        if (!selectedProduct) throw new Error("không tìm thấy sản phẩm")
        await api.put('carts', {productId: selectedProduct.id})
    }
    const closeProductDetail = () => {
        setSelectedProduct(null);
        setDetailError("");
    };

    return (
        <div className="home-page">

            <Navbar />

            <main className="home-content">

                <section className="home-welcome">
                    <h1>
                        Xin chào, {user?.userName || "Người dùng"}
                    </h1>

                    <p>
                        Khám phá những sản phẩm mới nhất
                    </p>
                </section>

                <section className="products-section">

                    <div className="products-header">
                        <h2>Products</h2>

                        <span>
                            {products.length} sản phẩm
                        </span>
                    </div>

                    {loading && (
                        <div className="products-message">
                            Đang tải sản phẩm...
                        </div>
                    )}

                    {!loading && error && (
                        <div className="products-message error">
                            {error}
                        </div>
                    )}

                    {!loading && !error && products.length === 0 && (
                        <div className="products-message">
                            Chưa có sản phẩm nào.
                        </div>
                    )}

                    {!loading && !error && products.length > 0 && (
                        <div className="products-grid">

                            {products.map((product) => (
                                <div
                                    className="product-card"
                                    key={product.id}
                                    onClick={() =>
                                        handleProductClick(product.id)
                                    }
                                >

                                    <div className="product-image-wrapper">
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="product-image"
                                            />
                                        ) : (
                                            <div className="product-image-placeholder">
                                                No image
                                            </div>
                                        )}
                                    </div>

                                    <div className="product-info">

                                        <h3 className="product-name">
                                            {product.name}
                                        </h3>

                                        <p className="product-price">
                                            {product.price.toLocaleString("vi-VN")} ₫
                                        </p>

                                    </div>

                                </div>
                            ))}

                        </div>
                    )}

                </section>

            </main>

            {/* =========================
                PRODUCT DETAIL MODAL
            ========================= */}

            {(detailLoading || selectedProduct || detailError) && (
                <div
                    className="product-modal-overlay"
                    onClick={closeProductDetail}
                >

                    <div
                        className="product-modal"
                        onClick={(event) => event.stopPropagation()}
                    >

                        {/* CLOSE BUTTON */}
                        <button
                            className="product-modal-close"
                            onClick={closeProductDetail}
                        >
                            ×
                        </button>

                        {/* LOADING */}
                        {detailLoading && (
                            <div className="product-detail-loading">
                                Đang tải thông tin sản phẩm...
                            </div>
                        )}

                        {/* ERROR */}
                        {!detailLoading && detailError && (
                            <div className="product-detail-error">
                                {detailError}
                            </div>
                        )}

                        {/* PRODUCT DETAIL */}
                        {!detailLoading && selectedProduct && (
                            <div className="product-detail">

                                <div className="product-detail-image-wrapper">

                                    {selectedProduct.image ? (
                                        <img
                                            src={selectedProduct.image}
                                            alt={selectedProduct.name}
                                            className="product-detail-image"
                                        />
                                    ) : (
                                        <div className="product-detail-image-placeholder">
                                            No image
                                        </div>
                                    )}

                                </div>

                                <div className="product-detail-content">

                                    <div className="product-detail-category">
                                        {selectedProduct.category}
                                    </div>

                                    <h2>
                                        {selectedProduct.name}
                                    </h2>

                                    <div className="product-detail-brand">
                                        Brand: {selectedProduct.brand}
                                    </div>
                                    
                                    <div className="product-detail-quantity">
                                        Còn lại: {selectedProduct.quantity} sản phẩm
                                    </div>

                                    <div className="product-detail-price">
                                        {selectedProduct.price.toLocaleString("vi-VN")} ₫
                                    </div>

                                    <div className="product-detail-description">

                                        <h3>
                                            Description
                                        </h3>

                                        <p>
                                            {selectedProduct.description ||
                                                "Chưa có mô tả cho sản phẩm này."}
                                        </p>

                                    </div>

                                    <button className="add-to-cart-button" onClick={addHandle}>
                                        Add to cart
                                    </button>

                                </div>

                            </div>
                        )}

                    </div>

                </div>
            )}

        </div>
    );
}