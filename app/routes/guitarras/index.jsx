import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import Guitarra from "~/components/guitarra";

export async function loader() {
    const guitarras = await getGuitarras();

    return guitarras;
}

export function meta() {
    return {
        title: "GuitarLa - Tienda",
        description:
            "En venta todas nuestra guitarras con la mejor calidad del mercado",
    };
}

function Tienda() {
    const guitarras = useLoaderData();

    return (
        <div className="contenedor">
            <h2 className="heading">Nuestra Colección</h2>
            {guitarras?.length && (
                <div className="guitarras-grid">
                    {guitarras.map((guitarra) => (
                        <Guitarra
                            key={guitarra?.id}
                            guitarra={guitarra?.attributes}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
export default Tienda;
