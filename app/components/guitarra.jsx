import { Link } from "@remix-run/react";

const Guitarra = ({ guitarra }) => {
    const { nombre, precio, imagen, url } = guitarra;
    return (
        <div className="card">
            <img
                src={imagen?.data?.attributes?.formats?.small?.url}
                alt={nombre}
            />
            <div className="contenido">
                <h3 className="titulo">{nombre}</h3>
                <p className="precio">${precio}</p>

                <Link className="enlace" to={`/guitarras/${url}`}>Ver producto</Link>
            </div>
        </div>
    );
};

export default Guitarra;
