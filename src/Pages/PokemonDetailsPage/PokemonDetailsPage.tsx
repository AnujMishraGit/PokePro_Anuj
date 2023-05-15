// @ts-nocheck
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { getCurrentPokemonData } from "../../app/getCurrentPokemonData";
import axios from "axios";
import DetailsNavBar from "../../components/DetailsNavBar/DetailsNavBar";

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
        .get(`https://pokeapi.co/api/v2/ability/${currentPokemon.id}`)
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

  // console.log(currentPokemon?.baseColor);

  return (
    <div className="w-full h-fit flex ">
      {currentPokemon ? (
        <div className="w-full h-full flex  justify-around bg-slate-200">
          <div className=" w-1/2 h-full flex flex-col ">
            <div className="w-full h-1/5 flex justify-between">
              <div className="w-1/2  h-full  flex flex-col  pl-12 pt-6">
                <div className=" text-gray-700">{`n ${currentPokemon.id
                  .toString()
                  .padStart(3, "0")}`}</div>
                <div className=" text-purple-800 uppercase text-xl font-semibold ">
                  {currentPokemon.name}
                </div>
              </div>
              <div className="w-1/2 h-full text-red-400 flex flex-col pl-12 pt-6 justify-between">
                {currentPokemon.type.map((item, idx) => (
                  <div
                    key={`pokemon-${item.id}`}
                    className=" w-fit bg-green-200 capitalize rounded-md pl-4 pr-4  "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div
              className=" h-full rounded-3xl m-10 p-10 flex justify-center items-center "
              style={{ backgroundColor: currentPokemon.baseColor }}
            >
              <LazyLoadImage
                src={currentPokemon.image}
                alt={currentPokemon.name}
                effect="blur"
              />
            </div>
          </div>
          <div className=" w-1/2 h-full bg-slate-200 flex flex-col justify-items-center align-middle ">
            <div className=" h-1/5  flex justify-around align-middle font-bold text-center m-10 text-gray-400">
              <DetailsNavBar />
            </div>
            {/* <div className="h-20 flex justify-evenly "></div> */}
            <div className="h-3/5 p-10 m-8">
              <div className=" text-3xl capitalize font-semibold text-gray-500 m-8">
                <span className=" text-black">Growth Rate:&nbsp;</span>
                {currentPokemon.growth_rate}
              </div>
              <div className="text-2xl capitalize font-semibold text-gray-500 m-8">
                <span className="text-black">Habitat: &nbsp;</span>
                {currentPokemon.habitat}
              </div>
            </div>
            <div className="h-20 flex font-medium text-black justify-around text-center">
              <div
                className="flex justify-between text-center items-center"
                title="Friendship affects the evolution of certain Pokémon"
              >
                <span className="text-2xl capitalize font-semibold text-gray-500 ">
                  Base Happiness: &nbsp;
                </span>
                {currentPokemon.base_happiness}/255
              </div>
              <div
                className="flex justify-between text-center items-center"
                title="Higher catch rates mean that the Pokémon is easier  to catch, up to a maximum of 255. "
              >
                <span className="text-2xl capitalize font-semibold text-gray-500 ">
                  Capture Rate: &nbsp;
                </span>
                {currentPokemon.capture_rate}/255
                {/* //Higher catch rates mean that the Pokémon is easier to catch, up to a maximum of 255. */}
              </div>
            </div>
            <div className="text-center text-slate-950 capitalize truncate align-middle h-20 p-10 font-bold text-xl">
              {pokemonFormsData.flavor_text}
            </div>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}

export default PokemonDetailsPage;
