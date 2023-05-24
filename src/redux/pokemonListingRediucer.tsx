import { createSlice, current } from "@reduxjs/toolkit";
import { PokemonTypeInitialState } from "../utils/Types";
import { PokemonListingActions } from "./getInitialData";
import { getPokemonsData } from "./getPokemonData";
import { getCurrentPokemonData } from "./getCurrentPokemonData";

const initialState: PokemonTypeInitialState = {
  allPokemon: [],
  currentPokemon: undefined,
  offset: 0,
  limit: 20,
};

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(PokemonListingActions.fulfilled, (state, action) => {
      state.allPokemon = [...state.allPokemon, ...action.payload];
      state.offset += state.limit;
    });
    builder.addCase(getPokemonsData.fulfilled, (state, action) => {
      //TODO optimize later
      const updatedPokemonsObject = action.payload;
      const updatedPokemonData = current(state.allPokemon).map((pokemon) => {
        if (updatedPokemonsObject[pokemon.id]) {
          return {
            ...pokemon,
            ...updatedPokemonsObject[pokemon.id],
          };
        }
        return pokemon;
      });

      state.allPokemon = updatedPokemonData;
    });
    builder.addCase(getCurrentPokemonData.fulfilled, (state, action) => {
      state.currentPokemon = action.payload;
    });
  },
});

export const {} = PokemonSlice.actions;
