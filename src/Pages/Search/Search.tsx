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

  const { allPokemon, randomPokemon, offset, limit } = useAppSelector(
    ({ pokemon }) => pokemon
  );

  const previousOffsetRef = useRef<number>(offset);
  useEffect(() => {
    previousOffsetRef.current = offset;
  }, [offset]);

  //  intersection observer for loading more data
  let observer: IntersectionObserver | null;

  useEffect(() => {
    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(
          PokemonListingActions({ offset: previousOffsetRef.current, limit })
        );
      }
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [dispatch]);

  useEffect(() => {
    if (targetRef.current && observer) {
      observer.observe(targetRef.current);
    }
    dispatch(getPokemonsData(allPokemon));
  }, [allPokemon, dispatch, targetRef]);

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

    return () => {
      saveScrollPosition();
    };
  }, []);

  /// ________________________________________________//

  return (
    <div className=" flex flex-col">
      <InputBar />
      <div
        className=" flex flex-wrap justify-center align-middle overflow-auto"
        ref={scrollableRef}
        style={{ height: "100vh" }}
      >
        {randomPokemon?.map((pokemon) => (
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
