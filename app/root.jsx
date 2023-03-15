import { useState } from "react";
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link,
} from "@remix-run/react";
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
    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (guitarra) => {
        if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
            const carritoActualizado = carrito.map((guitarraState) => {
                if (guitarraState.id === guitarra.id) {
                    guitarraState.cantidad = guitarra.cantidad;
                }

                return guitarraState;
            });

            setCarrito(carritoActualizado);
        } else {
            //* Registro nuevo
            setCarrito([...carrito, guitarra]);
        }
    };

    const actualizarCantidad = (guitarra) => {
        const carritoActualizado = carrito.map((guitarraState) => {
            if (guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad;
            }

            return guitarraState;
        });

        setCarrito(carritoActualizado);
    };

    const eliminarGuitarra = (id) => {
        const carritoActualizado = carrito.filter(
            (guitarraState) => guitarraState.id !== id
        );

        setCarrito(carritoActualizado);
    };

    return (
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra,
                }}
            />
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

// Manejo de errores
export const CatchBoundary = () => {
    const error = useCatch();
    return (
        <Document>
            <div className="contenido-error">
                <p className="error">{error.statusText}</p>
                <Link to="/" className="volver">
                    Volver al Inicio
                </Link>
            </div>
        </Document>
    );
};

export const ErrorBoundary = ({ error }) => {
    return (
        <Document>
            <div className="contenido-error">
                <p className="error">{error.statusText}</p>
                <Link to="/" className="volver">
                    Volver al Inicio
                </Link>
            </div>
        </Document>
    );
};
