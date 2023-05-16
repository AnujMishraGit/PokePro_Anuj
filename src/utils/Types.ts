export interface PokemonTypeInitialState {
    allPokemon: undefined | PokemonType[];
    randomPokemon: undefined | allPokemonDataType[];
    currentPokemon: undefined | individualPokemonDataType[];
    offset:number;
    limit:number;
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
    baseColor: string;
}
export interface individualPokemonDataType {
    name: string,
    id: number,
    image: string,
    type: string[],
    baseColor: string,
    base_happiness: number,
    capture_rate: number,
    growth_rate: string,
    habitat: string

}
