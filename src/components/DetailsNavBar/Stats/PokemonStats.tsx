//@ts-nocheck
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const PokemonStats = () => {
  const [stats, setStats] = useState([]);
  const location = useLocation();
  const pokemonID: number = parseInt(location.pathname.split("/")[2]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonID}`
      );
      setStats(response.data.stats);
    }
    fetchData();
  }, [pokemonID]);

  const renderBarGraph = () => {
    return (
      <div className="w-full flex-col  items-start">
        {stats.map((stat) => (
          <div className="flex ">
            <div key={stat.stat.name} className="w-full my-2 ">
              <div className="text-sm font-bold mb-1">{stat.stat.name}</div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="text-sm font-bold mt-1">{stat.base_stat}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full bg-gray-100 rounded-md p-4">
      {stats.length > 0 ? renderBarGraph() : <div>Loading...</div>}
    </div>
  );
};

export default PokemonStats;
