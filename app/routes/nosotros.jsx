import nosotros from "../../public/img/nosotros.jpg";

export function meta() {
    return {
        title: "GuitarLa - Nosotros",
        description:
            "Venta de las mejores guitarras junto con nuestras referencias",
    };
}

export function links() {
    return [
        {
            rel: "preload",
            href: nosotros,
            as: "image",
        },
    ];
}

function Nosotros() {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={nosotros} alt="Nosotros" />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat odit facilis nostrum officia placeat
                        consequuntur nam error magnam maxime tempora quae, id
                        dolorem eos est corrupti totam assumenda eligendi
                        nesciunt deserunt modi libero. Laborum aut, deserunt cum
                        ad ipsum id tempore nam optio dolore iusto qui nihil
                        dolorum iste cumque.
                    </p>
                </div>
            </div>
        </main>
    );
}
export default Nosotros;
