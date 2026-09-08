export const agregarAlEquipo = async (pokemon) => {
    const respuesta = await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pokemon)
    });

    if (!respuesta.ok) {
        throw new Error(
            "No fue posible agregar el Pokémon"
        );
    }

    return await respuesta.json();
};