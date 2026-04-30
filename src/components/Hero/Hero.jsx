import "./Hero.css";
import { useState } from "react";
import products from "../../data/products";

function Hero() {
    const [search, setSearch] = useState("");



    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Tu salud más cerca de ti</h1>

                <p>
                    Encuentra medicamentos, productos de cuidado personal
                    y solicita domicilios de forma rápida y segura.
                </p>

                <div className="hero-search">
                    <input
                        type="text"
                        placeholder="Buscar medicamento o producto..."
                        value={search}
                        onChange={handleSearch}
                    />
                </div>

                {search && (
                    <div className="search-results">
                        {filteredProducts.map((product, index) => (
                            <div key={index} className="search-card">
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                                <p>Stock: {product.stock}</p>
                                <p>Categoría: {product.category}</p>
                                <a
                                    href={`https://wa.me/573053485375?text=Hola, quiero pedir ${product.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="order-btn">
                                        Pedir ahora
                                    </button>
                                </a>

                            </div>
                        ))}
                    </div>
                )}

                {search && filteredProducts.length === 0 && (
                    <p>No se encontraron productos.</p>
                )}

                <div className="hero-buttons">
                    <button className="catalog-btn">Ver catálogo</button>
                    <button className="delivery-btn">Pedir domicilio</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;