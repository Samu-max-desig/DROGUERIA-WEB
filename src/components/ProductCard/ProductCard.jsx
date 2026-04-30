import "./ProductCard.css";

function ProductCard({ product, openModal }) {
    const handleCardClick = () => {
        if (product.available) {
            openModal(product);
        }
    };

    return (
        <div
            className="product-card"
            onClick={handleCardClick}
        >
            {product.available && product.discount > 0 && (
                <span className="discount-badge">
                    {product.discount}% OFF
                </span>
            )}

            {!product.available && (
                <span className="out-stock-badge">
                    Agotado
                </span>
            )}

            <div className="image-container">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                />
            </div>

            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>Categoría: {product.category}</p>

            {product.available ? (
                <a
                    href={`https://wa.me/573001234567?text=Hola, quiero pedir ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="order-btn">
                        Pedir ahora
                    </button>
                </a>
            ) : (
                <button
                    className="order-btn"
                    disabled
                >
                    No disponible
                </button>
            )}
        </div>
    );
}

export default ProductCard;