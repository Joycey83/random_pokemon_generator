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

  if (statType === "attack" && statValue > 65) {
    return "attack-type";
  } else if (statType === "attack" && statValue < 65) {
    return "place-holder";
  } else {
    return statColors[statType.toLowerCase()] || "pokemon-type-span";
  }
}

export default createStatColorSpan;
