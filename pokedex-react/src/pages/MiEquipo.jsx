import { useEffect, useState } from "react";
import { obtenerEquipo } from "../services/equipoApi";

function MiEquipo({ actualizarEquipo }) {
    const [equipo, setEquipo] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const cargarEquipo = async () => {
            try {
                const datos = await obtenerEquipo();
                setEquipo(datos);
            } catch (error) {
                setError(error.message);
            }
        };

        cargarEquipo();
    }, [actualizarEquipo]);

    return (
        <section>
            <h2>Mi Equipo Pokémon</h2>

            {error && <p>{error}</p>}

            {equipo.length === 0 ? (
                <p>
                    Todavía no tienes Pokémon en tu equipo.
                </p>
            ) : (
                equipo.map((pokemon) => (
                    <article key={pokemon.id}>
                        <h3>{pokemon.nombre}</h3>
                        <img
                            src={pokemon.imagen}
                            alt={pokemon.nombre}
                        />
                        <p>Nivel: {pokemon.nivel}</p>
                    </article>
                ))
            )}
        </section>
    );
}

export default MiEquipo;