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

export const getPost = async (url) => {
    try {
        const respuesta = await fetch(
            `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
        );
        const resultado = await respuesta.json();

        return resultado?.data[0]?.attributes;
    } catch (error) {
        console.log(error);
    }
};
