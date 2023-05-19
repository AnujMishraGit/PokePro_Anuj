import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  PokemonType,
  allPokemonDataType,
  individualPokemonDataType,
  PokiType,
} from "../utils/Types";
import { colorConverter } from "../utils/convertBaseColor";
import { pokemonRoute } from "../utils/baseUrl";

// to be placed in utils.js
function getTypeNames(types: PokiType[]): string[] {
  return types.map((type) => type.type.name);
}
export const getCurrentPokemonData = createAsyncThunk(
  "pokemon/currentPokemon",
  async (pokemonId: number | string | undefined) => {
    try {
      let pokemon: individualPokemonDataType = {
        name: "",
        id: 0,
        image: "",
        type: [],
        baseColor: "",
        base_happiness: 0,
        capture_rate: 0,
        growth_rate: "",
        habitat: "",
      };

      const response = await axios.get(`${pokemonRoute}/${pokemonId}`);

      pokemon = Object.assign(pokemon, {
        name: response.data.name,
        id: response.data.id,
        image: response.data.sprites.other["official-artwork"].front_default,
        type: getTypeNames(response.data.types),
      });

      const { data } = await axios.get(response.data.species.url);
      pokemon = Object.assign(pokemon, {
        baseColor: colorConverter(data.color.name, 0.25),
        base_happiness: data.base_happiness,
        capture_rate: data.capture_rate,
        growth_rate: data.growth_rate.name,
        habitat: data.habitat.name,
      });
      return pokemon;
    } catch (err) {
      console.error(err);
    }
  }
);
