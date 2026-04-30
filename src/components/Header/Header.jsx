
import "./Header.css";

import "./Header.css";

function Header() {
    return (
        <header>
            <div>
                <h2>Adminico Farm</h2>
            </div>

            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Catálogo</li>
                    <li>Domicilios</li>
                    <li>Sucursales</li>
                    <li>Contacto</li>
                </ul>
            </nav>

            <button className="whatsapp-btn">
                Pedir por WhatsApp
            </button>
        </header>
    );
}

export default Header;