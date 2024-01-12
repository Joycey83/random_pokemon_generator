function createStatColorSpan(statType) {
  const statColors = {
    hp: "hp-type",
    attack: "attack-type",
    defense: "defense-type",
    "sp.atk": "sp-atk-type",
    "sp.def": "sp-def-type",
    speed: "speed-type",
  };

  if (statType.attack > 65) {
    return "purple"; // assuming you want to return a color string
  } else {
    return statColors[statType.toLowerCase()] || "pokemon-type-span";
  }
}

export default createStatColorSpan;
