import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import EvolutionChain from "./EvolutionChain.js";
import { pokemonSpeciesRoute } from "../../../utils/baseUrl.js";
const Evolution: React.FC = () => {
  const location = useLocation();
  const pokemonID: number = parseInt(location.pathname.split("/")[2]);
  const [evolutionID, setEvolutionID] = useState<number | null>(null);
console.log("hi i am evolution section", pokemonID);
  useEffect(() => {
    //@ts-ignore
    async function getEvolutionID(pokemonID: number) {
      const { data } = await axios //@ts-ignore
        .get(`${pokemonSpeciesRoute}/${pokemonID}`);

      if (data) {
        console.log(data.evolution_chain.url.split("/").slice(-2, -1)[0])
        setEvolutionID(data.evolution_chain.url.split("/").slice(-2, -1)[0]);
      }
    }
    getEvolutionID(pokemonID);
  }, [pokemonID]);

  return (
    <div>{evolutionID && <EvolutionChain evolutionId={evolutionID} />}</div>
  );
};
export default Evolution;
