import { useEffect, useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hook";

import { useNavigate } from "react-router-dom";
import PokemonCard from "../../components/Card/PokemonCard";
import { PokemonListingActions } from "../../redux/getInitialData";
import { getPokemonsData } from "../../redux/getPokemonData";
import InputBar from "../../components/InputBar/InputBar";

const Search: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const { allPokemon, offset, limit } = useAppSelector(
    ({ pokemon }) => pokemon
  );

  const makePokemonDetailsAPICall = async () => {
    const pokemons = await dispatch(PokemonListingActions({ offset, limit }));
    dispatch(getPokemonsData(pokemons.payload));
  };

  useEffect(() => {
    let observer: IntersectionObserver;

    if (targetRef.current) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          makePokemonDetailsAPICall();
        }
      });
      observer.observe(targetRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [offset, targetRef.current]);

  /// __________________auto scroll to the last scroll position ____________________________________//
  const scrollableRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const saveScrollPosition = () => {
    if (scrollableRef.current) {
      const { scrollTop } = scrollableRef.current;
      window.history.replaceState(
        { ...window.history.state, scrollPosition: scrollTop },
        ""
      );
    }
  };

  const restoreScrollPosition = () => {
    if (scrollableRef.current) {
      const scrollPosition = window.history.state?.scrollPosition;
      scrollableRef.current.scrollTo({ top: scrollPosition });
    }
  };

  const handleNavigate = (id: number) => {
    saveScrollPosition();
    navigate(`/pokemon/${id}`);
  };

  useEffect(() => {
    restoreScrollPosition();
  }, []);

  /// ________________________________________________//

  return (
    <div className="flex flex-col">
      <InputBar />
      <div
        className="flex flex-wrap grow justify-center overflow-auto"
        ref={scrollableRef}
      >
        {allPokemon?.map((pokemon: PokemonType) => (
          <PokemonCard
            name={pokemon.name}
            imgURL={pokemon.image}
            type={pokemon.type}
            id={pokemon.id}
            baseColor={pokemon.baseColor}
            key={pokemon.id}
            onClick={handleNavigate}
          />
        ))}
        <div ref={targetRef}>loading.....</div>
      </div>
    </div>
  );
};

export default Search;
