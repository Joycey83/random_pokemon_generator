function createStatColorSpan(statType, statValue) {
  console.log(statType, statValue);
  const statColors = {
    hp: "hp-type",
    attack: "attack-type",
    defense: "defense-type",
    "sp.atk": "sp-atk-type",
    "sp.def": "sp-def-type",
    speed: "speed-type",
  };

  // Check if statType is 'defense' and statValue is greater than 65
  if (statType.toLowerCase() === "defense" && statValue > 65) {
    return "defense-high"; // return a different class
  }

  return statColors[statType.toLowerCase()] || "pokemon-type-span";
}

export default createStatColorSpan;
