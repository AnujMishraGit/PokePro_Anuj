export interface PokemonTypeInitialState {
    allPokemon: undefined | PokemonType[];
    randomPokemon: undefined | allPokemonDataType[];
};

export interface PokemonType {
    name: string;
    url: string;
}

export interface PokiType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface allPokemonDataType {
    name: string;
    id: number;
    image: string;
    type: PokiType;
    baseColor:string;
}
