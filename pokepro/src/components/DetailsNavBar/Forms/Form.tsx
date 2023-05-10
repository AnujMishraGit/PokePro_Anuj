import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { pokemonFormsUrl } from "../../../utils/baseUrl";
import { assign } from "lodash";
// import {pokemonFormsUrl} from "../.."
console.log("I the form has been mounted");

type Sprite = {
  [key: string]: string | null;
};

function fetchSprites(sprites: Sprite): JSX.Element[] {
  const images: JSX.Element[] = [];
  for (const key in sprites) {
    if (sprites.hasOwnProperty(key) && sprites[key] !== null) {
      images.push(<img key={key} src={sprites[key]!} alt={key} />);
    }
  }
  return images;
}

const Form:React.FC = () => {
  const location = useLocation();
  const pokemonID: number = parseInt(location.pathname.split("/")[2]);
  const [sprites, setSprites] = useState<Sprite>({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/evolution-chain/${pokemonID}`)
      .then((response) => axios.get(response.data.chain.species.url))
      .then((response) => console.log(response.data));
  }, [pokemonID]);

  return (
    <div className=" m-4  align-middle justify-center border-4 border-blue-300 rounded-lg p-4">
      <div className="flex justify-around ">{fetchSprites(sprites)}</div>
    </div>
  );
};
export default Form;
