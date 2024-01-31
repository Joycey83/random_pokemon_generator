function getBackgroundColor(statName, statValue) {
  console.log(`statName: ${statName}, statValue: ${statValue}`); // Add this line

  if (statName === "Total") {
    return "purple"; // Add color to total span
  }

  return statValue > 65
    ? "lightgreen"
    : statValue < 65
    ? "lightcoral"
    : "#ffa07a";
}

export default getBackgroundColor;
