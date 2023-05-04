import { createSlice } from "@reduxjs/toolkit";
import { PokemonTypeInitialState } from "../utils/Types";
import { getInitialPokemonData } from "./getInitialData";
import { getPokemonsData } from "./getPokemonData";
import { getCurrentPokemonData } from "./getCurrentPokemonData";
const initialState: PokemonTypeInitialState = {
  allPokemon: undefined,
  randomPokemon: undefined,
  currentPokemon: undefined,
};

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemon = action.payload;
    });
    builder.addCase(getPokemonsData.fulfilled,(state,action)=>{
     state.randomPokemon = action.payload;
    });
    builder.addCase(getCurrentPokemonData.fulfilled,(state,action)=>{
     state.currentPokemon = action.payload;
    });
  },
});

export const {} = PokemonSlice.actions;
