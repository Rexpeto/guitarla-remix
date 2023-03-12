import { Link, useLocation } from "@remix-run/react";
import imagen from "../../public/img/carrito.png";

const Navegacion = () => {
    const location = useLocation();

    return (
        <nav className="navegacion">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                Inicio
            </Link>
            <Link
                to="/blog"
                className={location.pathname === "/blog" ? "active" : ""}
            >
                Blog
            </Link>
            <Link
                to="/nosotros"
                className={location.pathname === "/nosotros" ? "active" : ""}
            >
                Nosotros
            </Link>
            <Link
                to="/guitarras"
                className={location.pathname === "/guitarras" ? "active" : ""}
            >
                Tienda
            </Link>
            <Link to="/carrito">
                <img src={imagen} alt="Carrito" className="carrito" />
            </Link>
        </nav>
    );
};

export default Navegacion;
