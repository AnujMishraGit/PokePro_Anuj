import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
interface IPokemon {
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
}

const Types: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const location = useLocation();
  const pokemonID: number = parseInt(location.pathname.split("/")[2]);

  useEffect(() => {
    async function fetchPokemon() {
      setLoading(true);
      try {
        const response = await axios.get<IPokemon>(
          `https://pokeapi.co/api/v2/pokemon/${pokemonID}`
        );
        setPokemon(response.data);
      } catch (error) {
        setError("Failed to fetch data");
      }
      setLoading(false);
    }

    fetchPokemon();
  }, [pokemonID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {pokemon && (
        <div className="bg-gray-300 p-4 rounded-md">
          <div className="flex">
            {pokemon.types.map((type, index) => (
              <div
                key={index}
                className={`px-2 py-1 bg-${
                  type.type.name
                }-400 text-white rounded-md mr-2`}
              >
                {type.type.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Types;
