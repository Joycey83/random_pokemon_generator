function getBackgroundColor(statValue) {
  return statValue > 65
    ? "lightgreen"
    : statValue < 65
    ? "lightcoral"
    : "transparent";
}

export default getBackgroundColor;
