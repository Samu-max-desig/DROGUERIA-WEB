import "./ProductModal.css";
import { useState } from "react";
import DeliveryForm from "../DeliveryForm/DeliveryForm";

function ProductModal({ product, closeModal }) {
    const [showForm, setShowForm] = useState(false);

    if (!product) return null;

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                {!showForm ? (
                    <>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="modal-image"
                        />

                        <div className="modal-info">
                            <h2>{product.name}</h2>

                            <p><strong>Precio:</strong> {product.price}</p>
                            <p><strong>Categoría:</strong> {product.category}</p>

                            {product.type && (
                                <p><strong>Tipo:</strong> {product.type}</p>
                            )}

                            {product.prescription && (
                                <p><strong>Fórmula médica:</strong> {product.prescription}</p>
                            )}

                            {product.presentation && (
                                <p><strong>Presentación:</strong> {product.presentation}</p>
                            )}

                            {product.size && (
                                <p><strong>Tamaño:</strong> {product.size}</p>
                            )}

                            {product.form && (
                                <p><strong>Forma:</strong> {product.form}</p>
                            )}

                            {product.concentration && (
                                <p><strong>Concentración:</strong> {product.concentration}</p>
                            )}

                            {product.flavor && (
                                <p><strong>Sabor:</strong> {product.flavor}</p>
                            )}

                            {product.invima && (
                                <p><strong>Registro sanitario:</strong> {product.invima}</p>
                            )}

                            {product.manufacturer && (
                                <p><strong>Fabricante:</strong> {product.manufacturer}</p>
                            )}

                            <div className="modal-buttons">
                                <button
                                    className="whatsapp-btn"
                                    onClick={() => setShowForm(true)}
                                >
                                    Pedir ahora
                                </button>

                                <button
                                    className="close-btn"
                                    onClick={closeModal}
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <DeliveryForm
                        product={product}
                        closeForm={() => setShowForm(false)}
                    />
                )}
            </div>
        </div>
    );
}

export default ProductModal;