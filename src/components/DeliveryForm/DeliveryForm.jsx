import { useState } from "react";
import "./DeliveryForm.css";
import sectors from "../../data/sectors";

function DeliveryForm({ product, closeForm }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [sector, setSector] = useState("");
    const [error, setError] = useState("");



    const handleSubmit = () => {
        const now = new Date();

        const day = now.getDay();
        const hour = now.getHours();

        if (day === 0) {
            setError(
                "Los domingos no prestamos servicio."
            );
            return;
        }

        if (hour < 8 || hour >= 21) {
            setError(
                "Nuestro horario es de 8:00 AM a 9:00 PM."
            );
            return;
        }
        if (!sector) {
            setError("Debes seleccionar un sector.");
            return;
        }

        const selectedSector = sectors.find(
            (item) => item.name === sector
        );

        const message =
            `Hola, quiero pedir ${product.name}%0A` +
            `Nombre: ${name}%0A` +
            `Teléfono: ${phone}%0A` +
            `Dirección: ${address}%0A` +
            `Sector: ${selectedSector.name}%0A` +
            `Sucursal asignada: ${selectedSector.store}%0A` +
            `Distancia estimada: ${selectedSector.distance}`;

        window.open(
            `https://wa.me/573001234567?text=${message}`
        );
    };


    return (
        <div className="delivery-form">
            <h3>Datos de entrega</h3>

            <input
                type="text"
                placeholder="Nombre completo"
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
            />

            <input
                type="text"
                placeholder="Número de teléfono"
                value={phone}
                onChange={(e) =>
                    setPhone(e.target.value)
                }
            />

            <input
                type="text"
                placeholder="Dirección exacta"
                value={address}
                onChange={(e) =>
                    setAddress(e.target.value)
                }
            />

            <select
                value={sector}
                onChange={(e) => {
                    setSector(e.target.value);
                    setError("");
                }}
            >
                <option value="">
                    Selecciona tu sector
                </option>

                {sectors.map((sectorItem, index) => (
                    <option
                        key={index}
                        value={sectorItem.name}
                    >
                        {sectorItem.name}
                    </option>
                ))}
            </select>

            {sector && (
                <div className="sector-info">
                    <p>
                        <strong>Sucursal:</strong>{" "}
                        {
                            sectors.find(
                                (item) =>
                                    item.name === sector
                            )?.store
                        }
                    </p>

                    <p>
                        <strong>Distancia:</strong>{" "}
                        {
                            sectors.find(
                                (item) =>
                                    item.name === sector
                            )?.distance
                        }
                    </p>
                </div>
            )}

            {error && (
                <p className="error-message">
                    {error}
                </p>
            )}

            <div className="form-buttons">
                <button
                    className="confirm-btn"
                    onClick={handleSubmit}
                >
                    Confirmar pedido
                </button>

                <button
                    className="cancel-btn"
                    onClick={closeForm}
                >
                    Cancelar
                </button>
            </div>
        </div>
    );
}

export default DeliveryForm;