export const getCurso = async () => {
    try {
        const respuesta = await fetch(
            `${process.env.API_URL}/curso?populate=imagen`
        );
        const resultado = await respuesta.json();

        return resultado?.data?.attributes;
    } catch (error) {
        console.log(error);
    }
};
