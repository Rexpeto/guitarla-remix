import { Outlet } from "@remix-run/react";
import style from "~/styles/blog.css";

export const links = () => {
    return [
        {
            rel: "stylesheet",
            href: style,
        },
    ];
};

function Blog() {
    return <Outlet />;
}
export default Blog;
