import "./Categories.css";

function Categories() {
    const categories = [
        "Medicamentos",
        "Dispositivos médicos",
        "Cuidado personal",
        "Bebés",
        "Belleza",
        "Snacks",
        "Helados",
        "Bebidas",
        "Vitaminas",
        "Higiene"
    ];

    return (
        <section className="categories">
            <h2>Categorías principales</h2>

            <div className="categories-grid">
                {categories.map((category, index) => (
                    <div key={index} className="category-card">
                        <h3>{category}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;