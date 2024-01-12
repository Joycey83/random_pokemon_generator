function createStatColorSpan(statType, statValue) {
  const statColors = {
    hp: "hp-type",
    attack: "attack-type",
    defense: "defense-type",
    "sp.atk": "sp-atk-type",
    "sp.def": "sp-def-type",
    speed: "speed-type",
  };

  const defaultColor = "pokemon-type-span";
  const backgroundColor = statColors[statType.toLowerCase()] || defaultColor;

  // Set background color based on the condition
  if (statValue > 65) {
    return `${backgroundColor} greater-than-65`;
  } else if (statValue < 65) {
    return `${backgroundColor} lower-than-65`;
  } else {
    return backgroundColor;
  }
}

export default createStatColorSpan;

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

// export default createStatColorSpan;
