import products from "../../data/products";
import "./Catalog.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductModal from "../../components/ProductModal/ProductModal";
import { useState } from "react";

function Catalog({ openModal }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const categories = [
        "Todos",
        ...new Set(products.map(product => product.category))
    ];

    const filteredProducts =
        selectedCategory === "Todos"
            ? products
            : products.filter(
                (product) => product.category === selectedCategory
            );

    return (
        <section className="catalog">

            <h1>Catálogo de productos</h1>

            <div className="category-filters">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={
                            selectedCategory === category
                                ? "active-filter"
                                : "filter-btn"
                        }
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="catalog-grid">
                {filteredProducts.map((product, index) => (
                    <ProductCard
                        key={index}
                        product={product}
                        openModal={setSelectedProduct}
                    />
                ))}
            </div>

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    closeModal={() => setSelectedProduct(null)}
                />
            )}

        </section>
    );
}

export default Catalog;