import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";
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
    const { nombre } = data;

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
    ];
};

const Guitarra = () => {
    const { nombre, descripcion, precio, imagen } = useLoaderData();
    const { url } = imagen?.data?.attributes?.formats?.small;

    return (
        <main className="contenedor guitarra">
            <div className="imagen">
                <img src={url} alt={nombre} />
            </div>
            <div className="contenido">
                <h3 className="nombre">{nombre}</h3>
                <p className="texto">{descripcion}</p>
                <p className="precio">${precio}</p>
            </div>
        </main>
    );
};

export default Guitarra;
