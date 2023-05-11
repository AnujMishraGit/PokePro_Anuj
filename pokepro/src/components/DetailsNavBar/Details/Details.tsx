//@ts-nocheck
import { useEffect, useState } from "react";
import axios from "axios";
import {  useLocation } from 'react-router-dom'

interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
}

interface Props {
  pokemonID: number;
}

const Details: React.FC = () => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();
  const location = useLocation();
  const pokemonID: number = parseInt(location.pathname.split("/")[2]);

  useEffect(() => {
    async function fetchPokemonDetails() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonID}`
      );
      setPokemonDetails(response.data);
    }
    fetchPokemonDetails();
  }, [pokemonID]);

  return (
    <div className="p-4 bg-gray-200 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-2">
        {pokemonDetails?.name} Details
      </h2>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white rounded-md shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Physical Attributes</h3>
          <p>
            Height: {pokemonDetails?.height / 10}m <br />
            Weight: {pokemonDetails?.weight / 10}kg
          </p>
        </div>
        <div className="bg-white rounded-md shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Abilities</h3>
          <ul>
            {pokemonDetails?.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-md shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Types</h3>
          <ul>
            {pokemonDetails?.types.map((type) => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;

