import { useNavigate } from "react-router-dom";
import { PokiType } from "../../utils/Types";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

type cardProps = {
  id: number;
  name: string;
  imgURL: string;
  baseColor?: string;
  ability?: string;
  type: PokiType;
};

function PokemonCard({
  id,
  name,
  imgURL,

  ability,
  baseColor,
  type,
}: cardProps) {
  // @ts-ignore
  let types: string = type[0].type.name;
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    console.log("Navigating to /pokemon/" + id);

    navigate(`/pokemon/${id}`);
  };

  return (
    <div
      onClick={() => handleCardClick(id)}
      className="w-1/6  bg-slate-200 m-6 p-4 rounded-sm flex flex-col items-center h-1/3 justify-evenly "
    >
      <div
        className="object-contain items-center rounded-md backdrop:blur-sm w-3/4 justify-center flex h-3/4"
        style={{ backgroundColor: baseColor }}
      >
        <LazyLoadImage
          src={imgURL}
          alt={name}
          effect="blur"
          placeholderSrc="../../assets/assets/pokeball.png"
        />
      </div>
      <div className=" flex  align-top justify-around w-full flex-col text-center">
        <div className=" text-2xl text-black  flex justify-evenly align-text-bottom">
          <h2 className=" text-sm text-gray-400">{`n ${id
            .toString()
            .padStart(3, "0")}`}</h2>
          <h3 className="font-bold capitalize  text-purple-800">{name}</h3>
        </div>
        <div>
          <h4 className=" text-blue-400 capitalize flex justify-end pr-10">
            {types}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
