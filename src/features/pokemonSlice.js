import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemonData = createAsyncThunk('pokemon/fetchPokemonData', async (thunkAPI) => {
    const numeroPokemon = Math.round(Math.random() * 799) + 1;
    try {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${numeroPokemon.toString()}`
        );
        console.log(typeof response.data);
        return response.data

    } catch (error) {
        console.log('error');
    }
});

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        status: 'idle',
        error: null,
        pokemonData: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemonData.pending, (state, action) => {
            state.status = 'loading';
            console.log("loading")
        });
        builder.addCase(fetchPokemonData.fulfilled, (state, action) => {
            state.status = 'success';
            state.pokemonData = Object.values(action.payload);
            console.log("success");
            console.log(action.payload);
        });
        builder.addCase(fetchPokemonData.rejected, (state, action) => {
            state.status = 'error';
            console.log('error');
        })
    }
})

export default pokemonSlice.reducer;