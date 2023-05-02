
import { useState, useEffect } from "react";
import axios from "axios";
import "./search.css";
import Card from "../../components/Card/Card";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonSprite {
  front_default: string;
}

interface PokemonDetails {
  sprites: PokemonSprite;
}
interface PokemonColorDetails{
  id: number;
  name:string;
  color:{
    name:string;
  }
}

const Search = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [pokemonImages, setPokemonImages] = useState<string[]>([]);
  const [pokemonColors, setPokemonsColors]= useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      const data = response.data.results;
      // console.log( response)
      setPokemonData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      const images: string[] = [];
      for (const pokemon of pokemonData) {
        const response = await axios.get<PokemonDetails>(pokemon.url);
        console.log(response);
        const image = response.data.sprites.front_default;
        images.push(image);
      }
      setPokemonImages(images);
    };
    fetchImages();
    const fetchColors = async () => {
      const colors: string[] = [];
      for (const pokemon of pokemonData) {
        let part : string[] = pokemon.url.split("/");
        let index: string = (part[part.length -2]);
        try{
          const response = await axios.get<PokemonColorDetails>(`https://pokeapi.co/api/v2/pokemon-species/${index}`);
          // const color = response.data.name;
          // console.log(response.data.color.name)
          colors.push(response.data.color.name);
        }catch{
          colors.push("white")

        }
        
      }
      console.log(colors);
      setPokemonsColors(colors);
    };
    fetchColors();
  }, [pokemonData]);

  return (
    <div className="card-container">
       
      {pokemonData.map((pokemon, index) => (
        <div key={index} className="card">
          <Card name={pokemon.name} imgURL={pokemonImages[index]} prominentColor={pokemonColors[index]} ability={undefined}/>
        </div>
      ))}
    </div>
  );
};




export default Search
