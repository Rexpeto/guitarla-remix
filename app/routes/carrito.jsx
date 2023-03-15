import { useEffect, useState } from "react";
import { useOutletContext } from "@remix-run/react";
import Articulo from "~/components/articulo";
import Resumen from "~/components/resumen";
import style from "~/styles/carrito.css";

export const links = () => {
    return [
        {
            rel: "stylesheet",
            href: style,
        },
    ];
};

export const meta = () => {
    return {
        title: "GuitarLa - Carrito",
        description: "GuitarLa, tienda de ventas de las mejores guitarras",
    };
};

const Carrito = () => {
    const [total, setTotal] = useState(0);
    const { carrito } = useOutletContext();

    useEffect(() => {
        const calculoTotal = carrito.reduce(
            (total, producto) => total + producto.cantidad * producto.precio,
            0
        );
        setTotal(calculoTotal);
    }, [carrito]);

    return (
        <main className="contenedor">
            <h1 className="heading">Carrito De Compras</h1>

            <div className="contenido-resumen">
                <div className="carrito">
                    <h2>Articulos</h2>
                    {carrito.length === 0
                        ? "Carrito Vácio"
                        : carrito.map((producto) => (
                              <Articulo producto={producto} key={producto.id} />
                          ))}
                </div>

                <Resumen total={total} />
            </div>
        </main>
    );
};

export default Carrito;
