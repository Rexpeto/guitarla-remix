import Navegacion from "./navegacion";
import logo from "../../public/img/logo.svg";

function Header() {
    return (
        <header className="header">
            <div className="contenedor barra">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <Navegacion />
            </div>
        </header>
    );
}
export default Header;
