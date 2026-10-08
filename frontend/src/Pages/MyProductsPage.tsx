import React, { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/MyProductsPage.css";

interface Brand {
    id: number;
    name: string;
}

interface Category {
    id: number;
    name: string;
}

interface Product {
    id: number;
    name: string;
    price: number;
    image: string | null;
}

interface ProductForm {
    SKU: string;
    name: string;
    size: string;
    quantity: string;
    price: string;
    description: string;
    image: string;
    categoryId: string;
    brandId: string;
}

interface BNCResponse {
    brandData: Brand[];
    categoryData: Category[];
}

export default function MyProductPage() {
    const [form, setForm] = useState<ProductForm>({
        SKU: "",
        name: "",
        size: "",
        quantity: "",
        price: "",
        description: "",
        image: "",
        categoryId: "",
        brandId: "",
    });

    const [brands, setBrands] = useState<Brand[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    const [loading, setLoading] = useState(true);
    const [creating, setCreating] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            setLoading(true);

            // Lấy user hiện tại
            const userResponse = await api.get("/users/me");
            const user = userResponse.data.data;

            // Lấy Brand + Category
            const infoResponse = await api.get<BNCResponse>(
                "/products/name-info"
            );

            const { brandData, categoryData } = infoResponse.data;

            setBrands(brandData);
            setCategories(categoryData);

            // Lấy sản phẩm của shop hiện tại
            const productResponse = await api.get(
                `/products/shop/${user.id}`
            );

            setProducts(productResponse.data);
        } catch (error) {
            console.error("Không thể tải dữ liệu:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            setCreating(true);

            const data = {
                SKU: form.SKU,
                name: form.name,
                size: form.size,
                quantity: Number(form.quantity),
                price: Number(form.price),
                description: form.description,
                image: form.image || null,
                categoryId: Number(form.categoryId),
                brandId: Number(form.brandId),
            };

            const response = await api.post(
                "/products/create",
                data
            );

            const newProduct = response.data;

            setProducts((prev) => [
                newProduct,
                ...prev,
            ]);

            setForm({
                SKU: "",
                name: "",
                size: "",
                quantity: "",
                price: "",
                description: "",
                image: "",
                categoryId: "",
                brandId: "",
            });

            alert("Tạo sản phẩm thành công!");
        } catch (error) {
            console.error("Tạo sản phẩm thất bại:", error);
            alert("Không thể tạo sản phẩm");
        } finally {
            setCreating(false);
        }
    };

    if (loading) {
        return (
            <div className="product-page-loading">
                Đang tải dữ liệu...
            </div>
        );
    }

    return (
        <div className="product-page">

            <div className="product-page-header">
                <h1>Quản lý sản phẩm</h1>
                <p>
                    Tạo và quản lý các sản phẩm của cửa hàng
                </p>
            </div>

            {/* CREATE PRODUCT */}
            <section className="create-product-section">
                <h2>Thêm sản phẩm</h2>

                <form
                    className="product-form"
                    onSubmit={handleSubmit}
                >
                    <div className="form-grid">

                        {/* SKU */}
                        <div className="form-group">
                            <label htmlFor="SKU">
                                SKU
                            </label>

                            <input
                                id="SKU"
                                name="SKU"
                                value={form.SKU}
                                onChange={handleChange}
                                placeholder="VD: IP15-BLK-128"
                                required
                            />
                        </div>

                        {/* NAME */}
                        <div className="form-group">
                            <label htmlFor="name">
                                Tên sản phẩm
                            </label>

                            <input
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Nhập tên sản phẩm"
                                required
                            />
                        </div>

                        {/* SIZE */}
                        <div className="form-group">
                            <label htmlFor="size">
                                Size
                            </label>

                            <input
                                id="size"
                                name="size"
                                value={form.size}
                                onChange={handleChange}
                                placeholder="VD: M, L, XL"
                                required
                            />
                        </div>

                        {/* QUANTITY */}
                        <div className="form-group">
                            <label htmlFor="quantity">
                                Số lượng
                            </label>

                            <input
                                id="quantity"
                                name="quantity"
                                type="number"
                                min="0"
                                value={form.quantity}
                                onChange={handleChange}
                                placeholder="0"
                                required
                            />
                        </div>

                        {/* PRICE */}
                        <div className="form-group">
                            <label htmlFor="price">
                                Giá
                            </label>

                            <input
                                id="price"
                                name="price"
                                type="number"
                                min="0"
                                value={form.price}
                                onChange={handleChange}
                                placeholder="VD: 1500000"
                                required
                            />
                        </div>

                        {/* BRAND */}
                        <div className="form-group">
                            <label htmlFor="brandId">
                                Thương hiệu
                            </label>

                            <select
                                id="brandId"
                                name="brandId"
                                value={form.brandId}
                                onChange={handleChange}
                                required
                            >
                                <option value="">
                                    -- Chọn thương hiệu --
                                </option>

                                {brands.map((brand) => (
                                    <option
                                        key={brand.id}
                                        value={brand.id}
                                    >
                                        {brand.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* CATEGORY */}
                        <div className="form-group">
                            <label htmlFor="categoryId">
                                Danh mục
                            </label>

                            <select
                                id="categoryId"
                                name="categoryId"
                                value={form.categoryId}
                                onChange={handleChange}
                                required
                            >
                                <option value="">
                                    -- Chọn danh mục --
                                </option>

                                {categories.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* IMAGE */}
                        <div className="form-group form-group-full">
                            <label htmlFor="image">
                                Link hình ảnh
                            </label>

                            <input
                                id="image"
                                name="image"
                                type="url"
                                value={form.image}
                                onChange={handleChange}
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>

                        {/* DESCRIPTION */}
                        <div className="form-group form-group-full">
                            <label htmlFor="description">
                                Mô tả
                            </label>

                            <textarea
                                id="description"
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                placeholder="Nhập mô tả sản phẩm..."
                                rows={4}
                            />
                        </div>

                    </div>

                    <button
                        className="create-product-button"
                        type="submit"
                        disabled={creating}
                    >
                        {creating
                            ? "Đang tạo..."
                            : "Tạo sản phẩm"}
                    </button>
                </form>
            </section>

            {/* PRODUCT LIST */}
            <section className="shop-products-section">

                <div className="section-title">
                    <div>
                        <h2>Sản phẩm của shop</h2>

                        <p>
                            {products.length} sản phẩm
                        </p>
                    </div>
                </div>

                {products.length === 0 ? (

                    <div className="empty-products">
                        <h3>Chưa có sản phẩm</h3>

                        <p>
                            Hãy tạo sản phẩm đầu tiên của
                            cửa hàng.
                        </p>
                    </div>

                ) : (

                    <div className="product-grid">

                        {products.map((product) => (

                            <div
                                className="product-card"
                                key={product.id}
                            >

                                <div className="product-image">

                                    {product.image ? (

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                        />

                                    ) : (

                                        <div className="no-image">
                                            Không có ảnh
                                        </div>

                                    )}

                                </div>

                                <div className="product-info">

                                    <h3>
                                        {product.name}
                                    </h3>

                                    <p className="product-id">
                                        ID: {product.id}
                                    </p>

                                    <p className="product-price">
                                        {product.price.toLocaleString(
                                            "vi-VN"
                                        )}{" "}
                                        ₫
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </section>

        </div>
    );
}