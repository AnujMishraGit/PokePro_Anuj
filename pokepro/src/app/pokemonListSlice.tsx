import { createSlice } from "@reduxjs/toolkit";
import { PokemonTypeInitialState } from "../utils/Types";
import { getInitialPokemonData } from "./getInitialData";
import { getPokemonsData } from "./getPokemonData";

const initialState: PokemonTypeInitialState = {
  allPokemon: undefined,
  randomPokemon: undefined,
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
    })
  },
});

export const {} = PokemonSlice.actions;
