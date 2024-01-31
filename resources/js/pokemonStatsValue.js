function getBackgroundColor(statName, statValue) {
  if (statName === "Total") {
    return "purple"; // Add color to total span
  }

  const numValue = Number(statValue);

  return numValue > 65
    ? "lightgreen"
    : numValue < 65
    ? "lightcoral"
    : "#ffa07a";
}

export default getBackgroundColor;
