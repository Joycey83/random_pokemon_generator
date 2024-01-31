function getBackgroundColor(statName, statValue) {
  // console.log(`statName: ${statName}, statValue: ${statValue}`);

  if (statName === "Total") {
    return "purple"; // Add a different color to total span
  }

  return statValue > 65
    ? "lightgreen"
    : statValue < 65
    ? "lightcoral" // if stat is equal to 65, change to this color span
    : "#ffa07a";
}

export default getBackgroundColor;
