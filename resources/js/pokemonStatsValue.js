function getBackgroundColor(statValue) {
  return statValue > 65
    ? "lightgreen"
    : statValue < 65
    ? "lightcoral"
    : "#ffa07a";
}

export default getBackgroundColor;
