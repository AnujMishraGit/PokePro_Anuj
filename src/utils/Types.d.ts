interface PokemonTypeInitialState {
  allPokemon: PokemonType[];
  currentPokemon: undefined | individualPokemonDataType;
  offset: number;
  limit: number;
}

interface PokemonType {
  id: number;
  name: string;
  url: string;
  image?: string;
  type?: PokiType[];
  baseColor?: string;
}

interface PokiType {
  slot:number;
  type: {
    name: string;
    url: string;
  };
}

interface individualPokemonDataType {
  name: string;
  id: number;
  image: string;
  type: string[];
  baseColor: string;
  base_happiness: number;
  capture_rate: number;
  growth_rate: string;
  habitat: string;
}
