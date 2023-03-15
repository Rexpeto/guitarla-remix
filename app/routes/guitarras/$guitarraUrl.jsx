import { useState } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";
import { ToastContainer, toast } from "react-toastify";
import styleToast from "react-toastify/dist/ReactToastify.css";
import styles from "~/styles/guitarra.css";

export const loader = async (res) => {
    const { params } = res;

    const guitarra = await getGuitarra(params.guitarraUrl);

    if (!guitarra) {
        throw new Response("", {
            status: 404,
            statusText: "Guitarra no encontrada",
        });
    }

    return guitarra;
};

export const meta = ({ data }) => {
    if (!data) {
        return {
            title: "Guitarra no encontrada",
            descripcion: "Venta de guitarra, guitarra no encontrada",
        };
    }
    const { nombre } = data?.attributes;

    return {
        title: `GuitarLa - ${nombre}`,
        description: `Venta de guitarra, guitarra ${nombre}`,
    };
};

export const links = () => {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
        {
            rel: "stylesheet",
            href: styleToast,
        },
    ];
};

const Guitarra = () => {
    const guitarra = useLoaderData();
    const { nombre, descripcion, precio, imagen } = guitarra?.attributes;
    const { url } = imagen?.data?.attributes?.formats?.small;
    const { agregarCarrito } = useOutletContext();

    const [cantidad, setCantidad] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cantidad < 1) {
            toast.error("Debes seleccionar una cantidad");
            return;
        }

        const guitarraSelect = {
            id: guitarra.id,
            nombre,
            precio,
            imagen: imagen?.data?.attributes?.formats,
            cantidad,
        };

        agregarCarrito(guitarraSelect);
    };

    return (
        <>
            <ToastContainer />
            <main className="contenedor guitarra">
                <div className="imagen">
                    <img src={url} alt={nombre} />
                </div>
                <div className="contenido">
                    <h3 className="nombre">{nombre}</h3>
                    <p className="texto">{descripcion}</p>
                    <p className="precio">${precio}</p>
                    <form className="formulario" onSubmit={handleSubmit}>
                        <label htmlFor="cantidad">Cantidad</label>
                        <select
                            onChange={(e) =>
                                setCantidad(parseInt(e.target.value))
                            }
                            name="cantidad"
                            id="cantidad"
                        >
                            <option value="0">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <input type="submit" value="Agregar" />
                    </form>
                </div>
            </main>
        </>
    );
};

export default Guitarra;
