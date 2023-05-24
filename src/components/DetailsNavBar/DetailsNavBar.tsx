import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useAppSelector } from "../../app/hook";

import Form from "./Forms/Form";
import Types from "./Types/Types";
import Details from "./Details/Details";
import Stats from "./Stats/Stats";
import Wear from "./Wear/Wear";


enum Constants {
  FORMS = "forms",
  DETAILS = "details",
  TYPES = "types",
  STATS = "stats",
  WEAR = "wear",
};

const  DetailsNavBar:React.FC = () => {
  const location = useLocation();
  const pokemonId = location.pathname.slice(-2);
  const { currentPokemon } = useAppSelector(({ pokemon }) => pokemon);

  const detailLocation =
    new URLSearchParams(location.search).get("nav") || Constants.FORMS;

  return (
    <div className="w-full">
      <ul className="flex text-lg font-semibold w-full justify-between">
        {Object.values(Constants).map((item, idx) => (
          <li key={idx} className="cursor-pointer hover:text-purple-600">
            <Link to={`?nav=${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <div>
        {detailLocation === Constants.FORMS && <Form />}
        {detailLocation === Constants.DETAILS && <Details />}
        {detailLocation === Constants.STATS && <Stats />}
        {detailLocation === Constants.TYPES && <Types />}
        {detailLocation === Constants.WEAR && <Wear />}
      </div>
    </div>
  );
}

export default DetailsNavBar;
