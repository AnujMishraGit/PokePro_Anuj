export function getComplementaryColor(type: string): string {
    const colors: { [key: string]: string } = {
        normal: "rgba(168, 168, 120, 1)",
        fighting: "rgba(192, 48, 40, 1)",
        flying: "rgba(144, 168, 240, 1)",
        poison: "rgba(160, 64, 160, 1)",
        ground: "rgba(224, 192, 104, 1)",
        rock: "rgba(184, 160, 56, 1)",
        bug: "rgba(168, 184, 32, 1)",
        ghost: "rgba(110, 90, 160, 1)",
        steel: "rgba(184, 184, 208, 1)",
        fire: "rgba(240, 128, 48, 1)",
        water: "rgba(104, 144, 240, 1)",
        grass: "rgba(120, 200, 80, 1)",
        electric: "rgba(248, 208, 48, 1)",
        psychic: "rgba(248, 88, 136, 1)",
        ice: "rgba(152, 216, 216, 1)",
        dragon: "rgba(112, 56, 248, 1)",
        dark: "rgba(112, 88, 72, 1)",
        fairy: "rgba(238, 153, 172, 1)",
        unknown: "rgba(192, 192, 192, 1)",
    };
    const complementaryColor = colors[type.toLowerCase()] ?? "rgba(0, 0, 0, 1)"

    return complementaryColor;

}



export function growth_rate_color(type: string): string {
    const colors: { [key: string]: string } = {
        slow: "rgba(255, 0, 0, 0.8)",
        medium: "rgba(0, 180, 0, 0.8)",
        fast: "rgba(0, 0, 255, 0.8)",
        "medium-slow": "rgba(125, 234, 0, 0.8)",
        "slow-then-very-fast": "rgba(255, 0, 255, 0.8)",
        "fast-then-very-slow": "rgba(0, 255, 255, 0.8)",
    };

    const color = colors[type.toLowerCase()] ?? "rgba(0, 0, 0, 1)";
    return color;
}

export function getHabitatColor(habitat: string): string {
    const habitatColors: { [key: string]: string } = {
        grass: "rgba(46, 204, 113, 1)",     // Green color for "grass"
        water: "rgba(52, 152, 219, 1)",     // Blue color for "water"
        cave: "rgba(149, 165, 166, 1)",     // Gray color for "cave"
        mountain: "rgba(127, 140, 141, 1)", // Gray color for "mountain"
        urban: "rgba(241, 196, 15, 1)",     // Yellow color for "urban"
        forest: "rgba(39, 174, 96, 1)",     // Green color for "forest"
        desert: "rgba(241, 148, 138, 1)",
    };

    return habitatColors[habitat.toLowerCase()] || "rgba(0, 0, 0, 1)";
};
