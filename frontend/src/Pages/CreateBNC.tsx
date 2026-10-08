
import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/CreateBNC.css";

interface Brand {
    id: number;
    name: string;
}

interface Category {
    id: number;
    name: string;
}

interface BNCResponse {
    brandData: Brand[];
    categoryData: Category[];
}

function CreateBNC() {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    const [brandName, setBrandName] = useState("");
    const [brandDescription, setBrandDescription] = useState("");

    const [categoryName, setCategoryName] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");

    const [loading, setLoading] = useState(true);
    const [creatingBrand, setCreatingBrand] = useState(false);
    const [creatingCategory, setCreatingCategory] = useState(false);

    const [error, setError] = useState("");

    const fetchBNC = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await api.get<BNCResponse>(
                "/products/name-info"
            );

            setBrands(response.data.brandData);
            setCategories(response.data.categoryData);
        } catch (error) {
            console.error(error);
            setError("Không thể tải Brand và Category");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBNC();
    }, []);

    const handleCreateBrand = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!brandName.trim()) {
            return;
        }

        try {
            setCreatingBrand(true);
            setError("");

            await api.post("/products/create-brand", {
                name: brandName.trim(),
                description: brandDescription.trim() || undefined,
            });

            setBrandName("");
            setBrandDescription("");

            await fetchBNC();
        } catch (error) {
            console.error(error);
            setError("Không thể tạo Brand");
        } finally {
            setCreatingBrand(false);
        }
    };

    const handleCreateCategory = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!categoryName.trim()) {
            return;
        }

        try {
            setCreatingCategory(true);
            setError("");

            await api.post("/products/create-category", {
                name: categoryName.trim(),
                description: categoryDescription.trim() || undefined,
            });

            setCategoryName("");
            setCategoryDescription("");

            await fetchBNC();
        } catch (error) {
            console.error(error);
            setError("Không thể tạo Category");
        } finally {
            setCreatingCategory(false);
        }
    };

    return (
        <div className="create-bnc-page">

            <div className="create-bnc-header">
                <h1>Brand & Category</h1>
                <p>
                    Quản lý Brand và Category cho sản phẩm
                </p>
            </div>

            {error && (
                <div className="create-bnc-error">
                    {error}
                </div>
            )}

            <div className="create-bnc-layout">

                {/* ================= BRAND ================= */}

                <section className="bnc-section">

                    <div className="bnc-section-header">
                        <h2>Create Brand</h2>

                        <span>
                            {brands.length} brands
                        </span>
                    </div>

                    <form
                        className="bnc-form"
                        onSubmit={handleCreateBrand}
                    >
                        <div className="form-group">
                            <label htmlFor="brand-name">
                                Brand name
                            </label>

                            <input
                                id="brand-name"
                                type="text"
                                value={brandName}
                                onChange={(e) =>
                                    setBrandName(e.target.value)
                                }
                                placeholder="Enter brand name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="brand-description">
                                Description
                            </label>

                            <textarea
                                id="brand-description"
                                value={brandDescription}
                                onChange={(e) =>
                                    setBrandDescription(e.target.value)
                                }
                                placeholder="Enter brand description"
                                rows={4}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={
                                creatingBrand ||
                                !brandName.trim()
                            }
                        >
                            {creatingBrand
                                ? "Creating..."
                                : "Create Brand"}
                        </button>
                    </form>

                    <div className="bnc-list">
                        <h3>Available Brands</h3>

                        {loading ? (
                            <p className="empty-text">
                                Loading...
                            </p>
                        ) : brands.length === 0 ? (
                            <p className="empty-text">
                                No brands available
                            </p>
                        ) : (
                            brands.map((brand) => (
                                <div
                                    className="bnc-item"
                                    key={brand.id}
                                >
                                    <div>
                                        <strong>
                                            {brand.name}
                                        </strong>

                                        <span>
                                            ID: {brand.id}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                </section>

                {/* ================= CATEGORY ================= */}

                <section className="bnc-section">

                    <div className="bnc-section-header">
                        <h2>Create Category</h2>

                        <span>
                            {categories.length} categories
                        </span>
                    </div>

                    <form
                        className="bnc-form"
                        onSubmit={handleCreateCategory}
                    >
                        <div className="form-group">
                            <label htmlFor="category-name">
                                Category name
                            </label>

                            <input
                                id="category-name"
                                type="text"
                                value={categoryName}
                                onChange={(e) =>
                                    setCategoryName(e.target.value)
                                }
                                placeholder="Enter category name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="category-description">
                                Description
                            </label>

                            <textarea
                                id="category-description"
                                value={categoryDescription}
                                onChange={(e) =>
                                    setCategoryDescription(e.target.value)
                                }
                                placeholder="Enter category description"
                                rows={4}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={
                                creatingCategory ||
                                !categoryName.trim()
                            }
                        >
                            {creatingCategory
                                ? "Creating..."
                                : "Create Category"}
                        </button>
                    </form>

                    <div className="bnc-list">
                        <h3>Available Categories</h3>

                        {loading ? (
                            <p className="empty-text">
                                Loading...
                            </p>
                        ) : categories.length === 0 ? (
                            <p className="empty-text">
                                No categories available
                            </p>
                        ) : (
                            categories.map((category) => (
                                <div
                                    className="bnc-item"
                                    key={category.id}
                                >
                                    <div>
                                        <strong>
                                            {category.name}
                                        </strong>

                                        <span>
                                            ID: {category.id}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                </section>

            </div>
        </div>
    );
}

export default CreateBNC;