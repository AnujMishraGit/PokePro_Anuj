import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getCurrentPokemonData } from "../../redux/getCurrentPokemonData";
import axios from "axios";
import DetailsNavBar from "../../components/DetailsNavBar/DetailsNavBar";
import {
  getComplementaryColor,
  getHabitatColor,
  growth_rate_color,
} from "../../utils/typesColor";

const PokemonDetailsPage: React.FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const [pokemonFormsData, setPokemonFormsData] = useState({
    flavor_text: "",
  });
  const { currentPokemon } = useAppSelector(({ pokemon }) => pokemon);
  useEffect(() => {
    dispatch(getCurrentPokemonData(params.id));
  }, [dispatch]);
  useEffect(() => {
    if (currentPokemon?.id) {
      axios
        .get(`https://pokeapi.co/api/v2/ability/${currentPokemon.id}`) // fix this
        .then((res) => {
          setPokemonFormsData({
            flavor_text: res.data?.flavor_text_entries[3]?.flavor_text,
          });
        })
        .catch((err) => console.log(err));
    }
    return () => {
      setPokemonFormsData({
        flavor_text: "",
      });
    };
  }, [currentPokemon?.id]);

  return (
    <div className="w-full h-full">
      {currentPokemon ? (
        <div className="w-full h-full flex flex-col md:flex-row justify-center items-stretch md:items-center bg-slate-200">
          <div className="w-full md:w-1/2 h-full flex flex-col justify-between">
            <div className="w-full h-1/5 flex justify-center">
              <div className="w-1/2 h-full flex flex-col pl-6 pt-6 justify-around">
                <div className="text-gray-700">{`n ${currentPokemon.id
                  .toString()
                  .padStart(3, "0")}`}</div>
                <div className="text-purple-800 uppercase text-xl font-semibold">
                  {currentPokemon.name}
                </div>
              </div>
              <div className="w-1/2 h-full flex flex-col pl-6 pt-6 justify-between">
                <div className="flex flex-wrap">
                  {currentPokemon.type.map((item: string, idx: number) => (
                    <div
                      key={`pokemon-${idx}`}
                      style={{ backgroundColor: getComplementaryColor(item) }}
                      className=" capitalize rounded-md pl-4 pr-4 mr-2 mb-2"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="h-full flex justify-center items-center">
              <div
                className="h-3/4 w-3/4 bg-slate-200 rounded-3xl m-10 p-10 flex justify-center items-center"
                style={{ backgroundColor: currentPokemon.baseColor }}
              >
                <LazyLoadImage
                  src={currentPokemon.image}
                  alt={currentPokemon.name}
                  effect="blur"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full bg-slate-200 flex flex-col justify-items-center">
            <div className="h-1/5 flex justify-around items-center font-bold text-center m-12  text-gray-400">
              <DetailsNavBar />
            </div>
            <div className="h-full p-10 m-8 flex flex-col justify-center">
              <div
                className="text-3xl capitalize font-semibold  mb-6"
                style={{ color: growth_rate_color(currentPokemon.growth_rate) }}
              >
                <span className="text-black">Growth Rate:&nbsp;</span>
                {currentPokemon.growth_rate}
              </div>
              <div
                className="text-2xl capitalize font-semibold mb-6"
                style={{ color: getHabitatColor(currentPokemon.habitat) }}
              >
                <span className="text-black">Habitat: &nbsp;</span>
                {currentPokemon.habitat}
              </div>
              <div className=" flex flex-col  text-center">
                <div
                  className="flex justify-between items-center text-green-700"
                  title="Friendship affects the evolution of certain Pokémon"
                >
                  <span className="text-2xl capitalize font-semibold text-black">
                    Base Happiness: &nbsp;
                  </span>
                  {currentPokemon.base_happiness}/255
                </div>
                <div
                  className="flex justify-between items-center text-green-700"
                  title="Higher catch rates mean that the Pokémon is easier to catch, up to a maximum of 255. "
                >
                  <span className="text-2xl capitalize font-semibold text-black">
                    Capture Rate: &nbsp;
                  </span>
                  {currentPokemon.capture_rate}/255
                </div>
              </div>
              <div className="text-center text-slate-950 capitalize truncate mt-8 font-bold text-xl">
                {pokemonFormsData.flavor_text}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default PokemonDetailsPage;
