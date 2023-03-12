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
    return (
        <main className="contenedor">
            <h1 className="heading">Carrito De Compras</h1>

            <div className="contenido-resumen">
                <div className="carrito">
                    <h2>Articulos</h2>
                </div>
                <aside className="resumen">
                    <h3>Resumen del Pedido</h3>
                    <p>Total a pagar: $</p>
                </aside>
            </div>
        </main>
    );
};

export default Carrito;
