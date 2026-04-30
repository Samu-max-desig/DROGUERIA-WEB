import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Adminico Farm</h3>
                <p>Tu salud y bienestar en un solo lugar.</p>
            </div>

            <div className="footer-section">
                <h3>Contacto</h3>
                <p>WhatsApp</p>
                <p>Teléfono</p>
                <p>Correo</p>
            </div>

            <div className="footer-section">
                <h3>Sucursales</h3>
                <p>Droguería ProveMed</p>
                <p>Farma3</p>
            </div>

            <div className="footer-section">
                <h3>Horarios</h3>
                <p>Lunes a sábado</p>
                <p>Domingos y festivos</p>
            </div>
        </footer>
    );
}

export default Footer;