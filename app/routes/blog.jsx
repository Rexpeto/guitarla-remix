import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/blog.server";
import Post from "~/components/post";
import style from "~/styles/blog.css";

export const loader = async () => {
    const posts = await getPosts();

    return posts;
};

export const links = () => {
    return [
        {
            rel: "stylesheet",
            href: style,
        },
    ];
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
