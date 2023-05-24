import React from "react";
import { useLocation, Link } from "react-router-dom";

import Evolution from "./Evolution/Evolution";
import Types from "./Types/Types";
import Details from "./Details/Details";
import PokemonStats from "./Stats/PokemonStats";

enum Constants {
  EVOLUTION = "evolution",
  DETAILS = "details",
  TYPES = "types",
  STATS = "stats",
}

const DetailsNavBar: React.FC = () => {
  const location = useLocation();
  const detailLocation =
    new URLSearchParams(location.search).get("nav") || Constants.EVOLUTION;

  return (
    <div className="w-full">
      <ul className="flex text-lg font-semibold w-full justify-between">
        {Object.values(Constants).map((item, idx) => {
          const isActive = location.search.includes(`nav=${item}`);

          return (
            <li
              key={idx}
              className={`cursor-pointer ${isActive ? "text-purple-600" : ""}`}
            >
              <Link to={`?nav=${item}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
      <div className="  w-full h-40 mt-4">
        {detailLocation === Constants.EVOLUTION && <Evolution />}
        {detailLocation === Constants.DETAILS && <Details />}
        {detailLocation === Constants.STATS && <PokemonStats />}
        {detailLocation === Constants.TYPES && <Types />}
      </div>
    </div>
  );
};

export default DetailsNavBar;
