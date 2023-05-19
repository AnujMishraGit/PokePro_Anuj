import { PokiType } from "../../utils/Types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getComplementaryColor } from "../../utils/typesColor";
type cardProps = {
  id: number;
  name: string;
  imgURL: string;
  baseColor?: string;
  ability?: string;
  type: PokiType;
  onClick: (id: number) => void;
};

const PokemonCard: React.FC<cardProps> = ({
  id,
  name,
  imgURL,
  baseColor,
  type,
  onClick,
}) => {
  let types: string = "";
  if (type && type.type) {
    types = type.type.name;
  }

  return (
    <div
      onClick={() => onClick(id)}
      className="bg-slate-200 m-6 rounded-sm flex flex-col items-center justify-evenly w-full sm:w-5/12 md:w-fit lg:w-3/12 h-1/3 min-w-fit min-h-fit w-64 h-96"
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
          <h4
            className="  capitalize flex"
            style={{ color: getComplementaryColor(types) }}
          >{` ${types}`}</h4>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
