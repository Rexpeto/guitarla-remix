import { Meta, Links, Outlet, Scripts, LiveReload } from "@remix-run/react";
import Header from "~/components/header";
import Footer from "~/components/footer";
import styles from "~/styles/index.css";
import normalize from "~/styles/normalize.css";

export function meta() {
    return {
        charset: "utf-8",
        title: "GuitarLa - Remix",
        viewport: "width=device-width,initial-scale=1",
    };
}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: normalize,
        },
        {
            rel: "stylesheet",
            href: styles,
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
        },
    ];
}

export default function App() {
    return (
        <Document>
            <Outlet />
        </Document>
    );
}

function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
