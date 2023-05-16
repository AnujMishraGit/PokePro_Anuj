//@ts-nocheck
import { useEffect, useState } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { pokemonEvolutionChain, pokemonRoute } from "../../../utils/baseUrl";
import { useAppSelector } from "../../../app/hook";

const EvolutionChain = ({ evolutionId }) => {
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { currentPokemon } = useAppSelector(({ pokemon }) => pokemon);

  useEffect(() => {
    const fetchEvolutionChain = async () => {
      try {
        const { data } = await axios.get(
          `${pokemonEvolutionChain}/${evolutionId}/`
        );
        const species = data.chain.species.name;
        const evolvesTo = data.chain.evolves_to.map(
          (evolvesTo) => evolvesTo.species.name
        );
        const chain = [species, ...evolvesTo];

        const images = await Promise.all(
          chain.map(async (pokemonName) => {
            const { data } = await axios.get(`${pokemonRoute}/${pokemonName}/`);
            return data.sprites.front_default;
          })
        );

        setEvolutionChain(images);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvolutionChain();
  }, [evolutionId]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex object-fill w-full h-full overflow-auto justify-evenly">
      {evolutionChain.map((imageUrl, index) => (
        <LazyLoadImage
          key={index}
          src={imageUrl}
          alt={`Pokemon ${index}`}
          style={{ backgroundColor: currentPokemon.baseColor }}
        />
      ))}
    </div>
  );
};

export default EvolutionChain;
