import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import "./FeaturedProducts.css";

function FeaturedProducts({ openModal }) {
    const featuredProducts = products.filter(
        (product) => product.featured
    );

    return (
        <section className="featured-products">
            <h2>🔥 Ofertas del día</h2>

            <div className="featured-grid">
                {featuredProducts.map((product, index) => (
                    <ProductCard
                        key={index}
                        product={product}
                        openModal={openModal}
                    />
                ))}
            </div>
        </section>
    );
}

export default FeaturedProducts;