import { useOutletContext } from "@remix-run/react";

const Articulo = ({ producto }) => {
    const { nombre, cantidad, imagen, precio, id } = producto;
    const { actualizarCantidad, eliminarGuitarra } = useOutletContext();
    return (
        <div className="box-guitarra">
            <div className="imagen">
                <img src={imagen?.small?.url} alt={nombre} />
            </div>
            <div>
                <p className="nombre">{nombre}</p>
                <p>Cantidad:</p>
                <select
                    name="cantidad"
                    value={cantidad}
                    onChange={(e) =>
                        actualizarCantidad({
                            cantidad: parseInt(e.target.value),
                            id,
                        })
                    }
                    className="cantidad"
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <p className="precio">${precio}</p>
                <p className="subtotal">
                    Subtotal: <span>${precio * cantidad}</span>
                </p>
            </div>
            <button
                type="button"
                className="btn-eliminar"
                onClick={() => eliminarGuitarra(producto.id)}
            >
                <span>X</span>
            </button>
        </div>
    );
};

export default Articulo;
