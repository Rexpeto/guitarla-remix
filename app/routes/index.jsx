import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/blog.server";
import { getCurso } from "../models/curso.server";
import ListadoGuitarras from "~/components/listado-guitarras";
import stylesGuitarra from "~/styles/guitarras.css";
import ListadoPost from "~/components/listado-posts";
import stylesPost from "~/styles/blog.css";
import Curso from "~/components/curso";
import stylesCurso from "~/styles/curso.css";

export const meta = () => {
    return {
        title: "GuitarLa",
        description: "GuitarLa ventas de guitarras de mejor calidad",
    };
};

export const links = () => {
    return [
        {
            rel: "stylesheet",
            href: stylesGuitarra,
        },
        {
            rel: "stylesheet",
            href: stylesPost,
        },
        {
            rel: "stylesheet",
            href: stylesCurso,
        },
    ];
};

export const loader = async () => {
    const [guitarras, posts, curso] = await Promise.all([
        getGuitarras(),
        getPosts(),
        getCurso(),
    ]);

    return {
        guitarras,
        posts,
        curso,
    };
};

function Index() {
    const { guitarras, posts, curso } = useLoaderData();

    return (
        <>
            <main className="contenedor">
                <section>
                    <ListadoGuitarras guitarras={guitarras} />
                </section>
                <Curso curso={curso} />
                <section>
                    <ListadoPost posts={posts} />
                </section>
            </main>
        </>
    );
}
export default Index;
