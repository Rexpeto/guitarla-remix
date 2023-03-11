import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/blog.server";
import ListadoGuitarras from "~/components/listado-guitarras";
import stylesGuitarra from "~/styles/guitarras.css";
import ListadoPost from "~/components/listado-posts";
import stylesPost from "~/styles/blog.css";

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
    ];
};

export const loader = async () => {
    const [guitarras, posts] = await Promise.all([getGuitarras(), getPosts()]);

    return {
        guitarras,
        posts,
    };
};

function Index() {
    const { guitarras, posts } = useLoaderData();

    return (
        <>
            <main className="contenedor">
                <ListadoGuitarras guitarras={guitarras} />
                <ListadoPost posts={posts} />
            </main>
        </>
    );
}
export default Index;
