import { useNavigate } from "react-router-dom";
import { PokiType } from "../../utils/Types";
import { LazyLoadImage } from "react-lazy-load-image-component";


type cardProps = {
  id: number;
  name: string;
  imgURL: string;
  baseColor?: string;
  ability?: string;
  type?: PokiType;
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
      className="bg-slate-200 m-6  rounded-sm flex flex-col items-center justify-evenly w-full sm:w-5/12  md:w-fit lg:w-3/12 h-1/3 min-w-fit min-h-fit"
    >
      <div
        className="object-contain items-center rounded-md backdrop:blur-sm w-3/4 h-3/4 justify-center flex min-w-fit min-h-fit"
        style={{ backgroundColor: baseColor }}
      >
        <LazyLoadImage
          src={imgURL}
          alt={name}
          effect="blur"
          placeholderSrc="../../assets/assets/pokeball.png"
        />
      </div>
      <div className=" flex flex-col justify-center item-center w-full flex-wrap">
        <div className=" text-2xl text-black  flex items-center justify-around">
          <h2 className=" text-sm text-gray-400">{`# ${id
            .toString()
            .padStart(3, "0")}`}</h2>
          <h3 className="font-bold capitalize  text-purple-800">{name}</h3>
        </div>
        <div className="flex justify-around">
          <p className=" text-lg text-black">TYPE</p>
          <h4 className=" text-blue-400 capitalize flex">{` ${types}`}</h4>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
