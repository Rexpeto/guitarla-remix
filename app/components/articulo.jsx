const Articulo = ({ producto }) => {
    const { nombre, cantidad, imagen, precio } = producto;
    return (
        <div className="box-guitarra">
            <div className="imagen">
                <img src={imagen?.small?.url} alt={nombre} />
            </div>
            <div>
                <p className="nombre">{nombre}</p>
                <p>Cantidad: {cantidad}</p>
                <p className="precio">${precio}</p>
                <p className="subtotal">
                    Subtotal: <span>${precio * cantidad}</span>
                </p>
            </div>
        </div>
    );
};

export default Articulo;
