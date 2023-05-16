import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokemonRoute } from "../utils/baseUrl";

export const getInitialPokemonData = createAsyncThunk("pokemon/initialData", async (offset,limit) => {
    try {
        const { data } = await axios.get(`${pokemonRoute}/?limit=${limit}&offset=${offset}`);

        return data.results;
    } catch (error) {
        console.log(error)
    }
})