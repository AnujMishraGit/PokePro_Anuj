import { configureStore } from "@reduxjs/toolkit";
import { PokemonSlice } from "./pokemonListingRediucer";

export const store = configureStore({
  reducer: {
    pokemon: PokemonSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
