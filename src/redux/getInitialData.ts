import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokemonRoute } from "../utils/baseUrl";

export const PokemonListingActions = createAsyncThunk(
  "pokemon/initialData",
  async ({ offset, limit }: { offset: number; limit: number }) => {
    try {
      const { data: pokemonList } = await axios.get(
        `${pokemonRoute}/?limit=${limit}&offset=${offset}`
      );

      return pokemonList.results.map((pokemon) => {
        const id = new URL(pokemon.url).pathname.split("/")[4];
        return {
          ...pokemon,
          id,
        };
      });
    } catch (error) {
      console.log(error);
    }
  }
);
