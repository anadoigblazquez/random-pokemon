import { createContext, useState } from "react";
import PokemonChild from '../components/PokemonChild';
import axios from 'axios';

export const PokeContext = createContext(null);

const PokeContextProvider = () => {
    const [ pokemon, setPokemon ] = useState(null);
    
    const fetchPokemon = async () => {
        const numeroPokemon = Math.round(Math.random() * 799) + 1;
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numeroPokemon.toString()}`);
        
        setPokemon(res.data);
    }

    return (
        <>
            <PokeContext.Provider value={{ pokemon, fetchPokemon }}>
                <PokemonChild />
            </PokeContext.Provider>
        </>
    )
}

export default PokeContextProvider

