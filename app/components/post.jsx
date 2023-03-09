import { Link } from "@remix-run/react";
import { formatearFecha } from "~/utils/helpers";

const Post = ({ post }) => {
    const { titulo, url, imagen, publishedAt: publicado } = post;

    return (
        <Link to={url} className="post">
            <article>
                <img
                    className="imagen"
                    src={imagen?.data?.attributes?.formats?.small?.url}
                    alt={titulo}
                />
                <div className="contenido">
                    <h3 className="titulo">{titulo}</h3>
                    <p className="fecha">{formatearFecha(publicado)}</p>
                </div>
            </article>
        </Link>
    );
};

export default Post;
