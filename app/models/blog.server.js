export const getPosts = async () => {
    try {
        const respuesta = await fetch(
            `${process.env.API_URL}/posts?populate=imagen`
        );
        const resultado = await respuesta.json();

        return resultado?.data;
    } catch (error) {
        console.log(error);
    }
};
