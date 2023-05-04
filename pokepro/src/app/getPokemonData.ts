import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PokemonType, allPokemonDataType } from "../utils/Types";
import {colorConverter} from "../utils/convertBaseColor"
export const getPokemonsData = createAsyncThunk(
  "pokemon/randomPokemon",
  async (pokemons: PokemonType[]) => {
    try {

      const pokeData: allPokemonDataType[] = [];

      
      for await (const pokemon of pokemons) {
        const { data } = await axios.get(pokemon.url);
        // console.log(data);
        let color;
        if(data){
          const speciesData = await axios.get(data.species.url);
          // console.log("species", speciesData.data.color.name);
          let baseColor = speciesData?.data?.color?.name;
          color = colorConverter(baseColor, 0.25);
        }
        let image: string = data.sprites.front_default;
        if (image && color) {
          pokeData.push({
            name: pokemon.name,
            id: data.id,
            image: image,
            baseColor:color,            
            type: data.types
          });
        }
      }
      return pokeData;
    } catch (err) {
      console.error(err);
    }
  }
);