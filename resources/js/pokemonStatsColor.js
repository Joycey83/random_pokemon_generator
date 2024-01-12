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
    return "red"; // assuming you want to return a color string
  }

  return statColors[statType.toLowerCase()] || "pokemon-type-span";
}

export default createStatColorSpan;
