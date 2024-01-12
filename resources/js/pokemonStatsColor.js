function createStatColorSpan(statType, statValue) {
  const statColors = {
    hp: "hp-type",
    attack: "attack-type",
    defense: "defense-type",
    "sp.atk": "sp-atk-type",
    "sp.def": "sp-def-type",
    speed: "speed-type",
  };

  if (statType === "attack" && statValue > 65) {
    return "purple";
  } else if (statType === "attack" && statValue < 65) {
    return "aqua";
  } else {
    return statColors[statType.toLowerCase()] || "pokemon-type-span";
  }
}

export default createStatColorSpan;
