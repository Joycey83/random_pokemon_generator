function getBackgroundColor(statValue) {
  return statValue > 65
    ? "lightgreen"
    : statValue < 65
    ? "lightcoral"
    : "transparent";
}

// function createStatColorSpan(statType) {
//   const statColors = {
//     hp: "hp-type",
//     attack: "attack-type",
//     defense: "defense-type",
//     "sp.atk": "sp-atk-type",
//     "sp.def": "sp-def-type",
//     speed: "speed-type",
//   };

//   return statColors[statType.toLowerCase()] || "pokemon-type-span";
// }

export default getBackgroundColor;
