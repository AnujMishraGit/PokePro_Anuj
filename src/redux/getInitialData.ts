import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokemonRoute } from "../utils/baseUrl";


export const PokemonListingActions = createAsyncThunk("pokemon/initialData", async ({ offset, limit }: { offset: number, limit: number }) => {
    try {
        const { data } = await axios.get(`${pokemonRoute}/?limit=${limit}&offset=${offset}`);

        return data.results;
    } catch (error) {
        console.log(error)
    }
})