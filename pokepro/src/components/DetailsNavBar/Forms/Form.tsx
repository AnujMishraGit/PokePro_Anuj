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

// const  Form = () => {
//   const location = useLocation();
//   const pokemonID:number = parseInt(location.pathname.split("/")[2]);
//   console.log("this is the location");
//   useEffect( () => {
//     console.log(typeof(location.pathname.split("/")[2]));
//     axios.get(`${pokemonFormsUrl}${pokemonID}`).then((response) => {fetchSprites(response.data.sprites) })
//     // console.log(response);
//   }, []);
//   return <div>Form</div>;
// }

// export default Form;

const Form = () => {
  const location = useLocation();
  const pokemonID: number = parseInt(location.pathname.split("/")[2]);
  const [sprites, setSprites] = useState<Sprite>({});

  useEffect(() => {
    axios
      .get(`${pokemonFormsUrl}${pokemonID}`)
      .then((response) => {
        setSprites(response.data.sprites);
        console.log(response)
        fetchSprites(response.data.sprites);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pokemonID]);

  return (
    <div className=" m-4  align-middle justify-center border-4 border-blue-300 rounded-lg p-4">
      <div className="flex justify-around ">{fetchSprites(sprites)}</div>
    </div>
  );
};
export default Form;
