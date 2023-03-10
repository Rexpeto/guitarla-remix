import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/blog.server";
import Post from "~/components/post";

export const loader = async () => {
    const posts = await getPosts();

    return posts;
};

export const meta = () => {
    return {
        title: "GuitarLa - Blog",
        descripcion: "GuitarLa, venta de guitarras de la mejor calidad",
    };
};

function Blog() {
    const posts = useLoaderData();

    return (
        <div className="contenedor">
            <h2 className="heading">Blog</h2>
            <div className="blog">
                {posts.map((post) => (
                    <Post key={post?.id} post={post?.attributes} />
                ))}
            </div>
        </div>
    );
}
export default Blog;
