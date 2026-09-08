const API = "http://localhost:3001/equipo";

export const obtenerEquipo = async () => {
    const respuesta = await fetch(API);

    if (!respuesta.ok) {
        throw new Error(
            "No fue posible cargar el equipo"
        );
    }

    return await respuesta.json();
};