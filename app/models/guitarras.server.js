export async function getGuitarras() {
    try {
        const respuesta = await fetch(
            `${process.env.API_URL}/guitarras?populate=imagen`
        );
        const resultado = await respuesta.json();

        return resultado.data;
    } catch (error) {
        console.log(error);
    }
}
