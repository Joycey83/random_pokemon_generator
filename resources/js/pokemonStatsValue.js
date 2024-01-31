function getBackgroundColor(statName, statValue) {
  if (statName === "total") {
    return "purple"; // replace with your color
  }

  return statValue > 65
    ? "lightgreen"
    : statValue < 65
    ? "lightcoral"
    : "#ffa07a";
}

export default getBackgroundColor;
