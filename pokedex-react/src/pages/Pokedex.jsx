import { useState } from "react";
import { buscarPokemon } from "../services/pokeApi";

function Pokedex() {
    const [busqueda, setBusqueda] = useState("");
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState("");

    const buscar = async () => {
        try {
            setError("");
            const datos = await buscarPokemon(busqueda);
            setPokemon(datos);
        } catch (error) {
            setPokemon(null);
            setError(error.message);
        }
    };

    return (
        <section>
            <h2>Buscar Pokémon</h2>
            <input
                type="text"
                value={busqueda}
                placeholder="Ejemplo: pikachu"
                onChange={(evento) =>
                    setBusqueda(evento.target.value)
                }
            />
            <button onClick={buscar}>
                Buscar
            </button>
            {error && <p>{error}</p>}
            {pokemon && (
                <article>
                    <h2>{pokemon.name}</h2>
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                    />
                    <p>Altura: {pokemon.height}</p>
                    <p>Peso: {pokemon.weight}</p>
                </article>
            )}
        </section>
    );
}

export default Pokedex;