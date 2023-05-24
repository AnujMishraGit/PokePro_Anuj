import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { colorConverter } from "../utils/convertBaseColor";
export const getPokemonsData = createAsyncThunk(
  "pokemon/randomPokemon",
  async (pokemons: PokemonType[]) => {
    try {
      const pokemonData: Record<number, PokemonType> = {};

      await Promise.all(
        pokemons.map(async (pokemon) => {
          const { data: pokemonDetails } = await axios.get(pokemon.url);
          const { species, sprites, types } = pokemonDetails;
          if (!pokemonDetails) {
            return;
          }

          const { data: pokemonSpeciesData } = await axios.get(species.url);

          const baseColor = pokemonSpeciesData.color.name;
          const pokemonColor = colorConverter(baseColor, 0.25);
          const pokemonImage: string = sprites.front_default;

          if (pokemonColor && pokemonImage) {
            pokemonData[pokemonDetails.id] = {
              id: pokemonDetails.id, // Add the id property
              name: pokemonDetails.name, // Add the name property
              url: pokemon.url, // Add the url property
              image: pokemonImage,
              baseColor: pokemonColor,
              type: types as PokiType[],
            };
          }

          return pokemonSpeciesData;
        })
      );

      return pokemonData;
    } catch (err) {
      console.error(err);
    }
  }
);
