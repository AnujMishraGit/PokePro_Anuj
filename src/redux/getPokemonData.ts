import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PokemonType } from "../utils/Types";
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
              image: pokemonImage,
              baseColor: pokemonColor,
              type: types as PokiType[], // this ia an array of objects {slot: number,types: {name:"string", url:"string"}}
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
