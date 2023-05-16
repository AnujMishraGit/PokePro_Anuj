// @ts-nocheck
import { useEffect, useState, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component"; //new LazyLoadImage
import { useAppDispatch, useAppSelector } from "../../app/hook";
import "./search.css";
import PokemonCard from "../../components/Card/PokemonCard";
import { getInitialPokemonData } from "../../app/getInitialData";
import { getPokemonsData } from "../../app/getPokemonData";
import InputBar from "../../components/InputBar/InputBar";
import Loader from "../../components/Loader/Loader";
import { increaseOffset } from "../../app/pokemonListSlice";
const Search: React.FC = () => {
  // const offsetRef = useRef<number>(0);//redux the offset
  // const limitRef = useRef<number>(20);// redux the limit
  const targetRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const [scrollPosition, setScrollPosition] = useState("");
  const { allPokemon, randomPokemon,offset,limit  } = useAppSelector(
    ({ pokemon }) => pokemon
    );
    
    const previousOffsetRef = useRef<number>(offset);
    useEffect(()=>{
      previousOffsetRef.current = offset;
     },[offset])
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("offSet is "+ previousOffsetRef.current)
        dispatch(getInitialPokemonData(previousOffsetRef.current, limit));
        dispatch(increaseOffset());
        
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [dispatch]);

  useEffect(() => {
    if (targetRef.current && observer.current) {
      observer.current.observe(targetRef.current);
    }
  }, [observer]);
 


  useEffect(() => {
    if (allPokemon) {
      const clonedPokemon = [...allPokemon];//X
      const randomPokemons = allPokemon;

      dispatch(getPokemonsData(randomPokemons));//x
    }
  }, [allPokemon, dispatch]);

 

  return (
    <div className=" flex flex-wrap ">
      <InputBar />
      <div className=" flex flex-wrap justify-center align-middle   ">
        {randomPokemon?.map((pokemon, idx) => (
          <PokemonCard
            name={pokemon.name}
            imgURL={pokemon.image}
            type={pokemon.type}
            id={pokemon.id}
            baseColor={pokemon.baseColor}
            key={idx}
          />
        ))}
        <div ref={targetRef}>loading.....</div>
      </div>
    </div>
  );
};

export default Search;
