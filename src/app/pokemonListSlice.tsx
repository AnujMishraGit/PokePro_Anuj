import { createSlice } from "@reduxjs/toolkit";
import { PokemonTypeInitialState } from "../utils/Types";
import { getInitialPokemonData } from "./getInitialData";
import { getPokemonsData } from "./getPokemonData";
import { getCurrentPokemonData } from "./getCurrentPokemonData";

const initialState: PokemonTypeInitialState = {
  allPokemon: undefined,
  randomPokemon: undefined,
  currentPokemon: undefined,
  offset: 0,
  limit: 20,
};

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    increaseOffset: (state) => {
      state.offset += state.limit;
      console.log("increase ofSet was called off set is now " + state.offset)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      if (state.allPokemon) {
        state.allPokemon = [...state.allPokemon, ...action.payload];
      } else {
        state.allPokemon = action.payload;
      }
    });
    builder.addCase(getPokemonsData.fulfilled, (state, action) => {
      state.randomPokemon = action.payload;
    });
    builder.addCase(getCurrentPokemonData.fulfilled, (state, action) => {
      state.currentPokemon = action.payload;
    });
  },
});

export const {increaseOffset} = PokemonSlice.actions;
