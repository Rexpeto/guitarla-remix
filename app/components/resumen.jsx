const Resumen = ({ total }) => {
    return (
        <aside className="resumen">
            <h3>Resumen del Pedido</h3>
            <p>Total a pagar: ${total}</p>
        </aside>
    );
};

export default Resumen;
