const Curso = ({ curso }) => {
    const { titulo, contenido, imagen } = curso;
    const url = imagen?.data?.attributes?.formats?.large?.url;

    return (
        <section className="curso">
            <style jsx>{`
                .curso {
                    background-image: linear-gradient(
                            to right,
                            rgb(0 0 0 / 0.65),
                            rgb(0 0 0 / 0.7)
                        ),
                        url(${url});
                }
            `}</style>
            <div className="contenedor curso-grid">
                <div className="contenido">
                    <h2 className="heading">{titulo}</h2>
                    <p className="texto">{contenido}</p>
                </div>
            </div>
        </section>
    );
};

export default Curso;
