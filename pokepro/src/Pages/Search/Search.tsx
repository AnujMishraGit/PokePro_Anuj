import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hook";
import "./search.css";
import PokemonCard from "../../components/Card/PokemonCard";
import { getInitialPokemonData } from "../../app/getInitialData";
import { getPokemonsData } from "../../app/getPokemonData";

const Search = () => {
  const dispatch = useAppDispatch();
  // data fetching from api and storing it to the store
  const { allPokemon, randomPokemon } = useAppSelector(
    ({ pokemon }) => pokemon
  );
  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);
  useEffect(() => {
    if (allPokemon) {
      const clonedPokemon = [...allPokemon];
      const randomPokemons = clonedPokemon
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonsData(randomPokemons));
    }
  }, [allPokemon, dispatch]);

  return (
    <div className=" flex flex-wrap">
      {randomPokemon?.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          imgURL={pokemon.image}
          type={pokemon.type}
          id={pokemon.id}
          baseColor={pokemon.baseColor}
        />
      ))}
    </div>
  );
};

export default Search;
