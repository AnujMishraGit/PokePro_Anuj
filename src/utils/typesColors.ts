
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

    const complementaryColor = colors[type.toLowerCase()];
    if (complementaryColor) {
        return complementaryColor;
    } else {
        // If the type is not found, return a default color
        return "rgba(0, 0, 0, 1)";
    }
}
