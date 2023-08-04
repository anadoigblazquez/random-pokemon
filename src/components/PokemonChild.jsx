import React, { useContext } from 'react'
import { PokeContext } from '../contexts/PokeContextProvider'

const PokemonChild = () => {
    const { pokemon, fetchPokemon } = useContext(PokeContext)
    console.log(fetchPokemon)

    return (
        <>
            <div className='container'>
                <h2>Random Pokemon</h2>
                <p>Pulsa el botón para conseguir un Pokemon</p>
                <button onClick={fetchPokemon}>Obtener Pokemon</button>

                <div className='pokemon-data'>
                    {pokemon && (
                        <>
                            <p>Nombre: <span>{pokemon.name}</span></p>
                            <p>Id: <span>{pokemon.id}</span></p>
                        </>

                    )
                    }
                    <p className='abilities'>Habilidades:</p>
                    {pokemon && pokemon.abilities && <ul>
                        {pokemon.abilities.map((ability) => (
                            <li key={ability.slot}>{ability.ability.name}</li>
                        ))}
                    </ul>}
                </div>
            </div>
        </>
    )
}

export default PokemonChild