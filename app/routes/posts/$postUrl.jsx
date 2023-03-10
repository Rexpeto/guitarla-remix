import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/blog.server";
import { formatearFecha } from "~/utils/helpers";
import styles from "~/styles/post.css";

export const loader = async ({ params }) => {
    const post = await getPost(params.postUrl);

    if (post.length === 0) {
        throw new Response("", {
            status: 404,
            statusText: "Entrada no encontrada",
        });
    }

    return post;
};

export const links = () => {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
    ];
};

export const meta = ({ data }) => {
    const { titulo } = data;

    if (!data) {
        return {
            title: "GuitarLa - Entrada no encontrada",
        };
    }

    return {
        title: `GuitarLa - ${titulo}`,
    };
};

const PostUrl = () => {
    const post = useLoaderData();

    const { titulo, descripcion, publishedAt: publicado, imagen } = post;

    return (
        <article className="contenedor Post">
            <img
                src={imagen?.data?.attributes?.formats?.small?.url}
                alt={titulo}
                className="imagen"
            />
            <div className="contenido">
                <h3 className="titulo">{titulo}</h3>
                <p className="fecha">{formatearFecha(publicado)}</p>
                <p className="descripcion">{descripcion}</p>
            </div>
        </article>
    );
};

export default PostUrl;
