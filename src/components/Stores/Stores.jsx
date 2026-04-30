import "./Stores.css";

function Stores() {
    const stores = [
        {
            name: "ProveMed",
            address: "Cra 39B #45A Sur-120, Envigado",
            phone: "6043314244",
            schedule: "Lunes a sábado | 8:00 AM - 9:00 PM",
            lat: 6.160935133497898,
            lng: -75.59069705212471
        },
        {
            name: "FarmaTres",
            address: "Cl 48C Sur #40-56, Envigado, Antioquia",
            phone: "6040000000",
            schedule: "Lunes a sábado | 8:00 AM - 9:00 PM",
            lat: 6.158549853638701,
            lng: -75.59596407070963
        }
    ];

    return (
        <section className="stores">
            <h2>Nuestras sucursales</h2>

            <div className="stores-grid">
                {stores.map((store, index) => (
                    <div
                        className="store-card"
                        key={index}
                    >
                        <h3>{store.name}</h3>

                        <p>
                            <strong>Dirección:</strong>{" "}
                            {store.address}
                        </p>

                        <p>
                            <strong>Teléfono:</strong>{" "}
                            {store.phone}
                        </p>

                        <p>
                            <strong>Horario:</strong>{" "}
                            {store.schedule}
                        </p>

                        <a
                            href={`https://www.google.com/maps?q=${store.lat},${store.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="location-btn">
                                Ver ubicación
                            </button>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stores;