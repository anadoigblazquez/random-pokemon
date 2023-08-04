import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import pokemonSlice from "../features/pokemonSlice";

const store = configureStore({
    reducer: {
        pokemon: pokemonSlice
    },
    middleware: [thunk]
})

export default store;