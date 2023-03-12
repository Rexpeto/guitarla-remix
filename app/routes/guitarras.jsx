import { Outlet } from "@remix-run/react";
import styleGuitarra from "~/styles/guitarras.css";

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styleGuitarra,
        },
    ];
}

function Tienda() {
    return <Outlet />;
}
export default Tienda;
