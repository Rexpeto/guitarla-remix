import { Link } from "@remix-run/react";
import logo from "../../public/img/logo.svg";

function Header() {
    return (
        <header className="header">
            <div className="contenedor barra">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav className="navegacion">
                    <Link to="/">Inicio</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/nosotros">Nosotros</Link>
                    <Link to="/tienda">Tienda</Link>
                </nav>
            </div>
        </header>
    );
}
export default Header;
