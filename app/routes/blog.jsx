import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/blog.server";
import Post from "~/components/post";

export const loader = async () => {
    const posts = await getPosts();

    return posts;
};

function Blog() {
    const posts = useLoaderData();

    return (
        <div className="contnedor">
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
