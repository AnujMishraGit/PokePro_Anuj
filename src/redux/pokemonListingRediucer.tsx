import { createSlice } from "@reduxjs/toolkit";
import { PokemonTypeInitialState } from "../utils/Types";
import { PokemonListingActions } from "./getInitialData";
import { getPokemonsData } from "./getPokemonData";
import { getCurrentPokemonData } from "./getCurrentPokemonData";

const initialState: PokemonTypeInitialState = {
  allPokemon: [],
  randomPokemon: [],
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
      if (state.allPokemon) {
        state.allPokemon = [...state.allPokemon, ...action.payload];
      } else {
        state.allPokemon = action.payload;
      }
      state.offset += state.limit;
    });
    builder.addCase(getPokemonsData.fulfilled, (state, action) => {
      state.randomPokemon = action.payload;
    });
    builder.addCase(getCurrentPokemonData.fulfilled, (state, action) => {
      state.currentPokemon = action.payload;
    });
  },
});

export const {} = PokemonSlice.actions;
