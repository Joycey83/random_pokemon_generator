function createStatColorSpan(statType, statValue) {
  const statColors = {
    hp: "hp-type",
    attack: "attack-type",
    defense: "defense-type",
    "sp.atk": "sp-atk-type",
    "sp.def": "sp-def-type",
    speed: "speed-type",
  };

  let colorClass = statColors[statType.toLowerCase()] || "pokemon-type-span";

  // Added a condition to change the color based on the stat value
  if (statValue > 65) {
    colorClass += " high-stat"; // Add class for high stats
  } else if (statValue < 65) {
    colorClass += " low-stat"; // Add class for low stats
  }

  return colorClass;
}

export default createStatColorSpan;
