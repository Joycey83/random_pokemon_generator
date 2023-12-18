// Defined a mapping of stat color level to CSS classes

const statsColor = {
  "drk-green": "#00C2B8",
  "mid-green": "#23CD5E",
  "lgt-green": "#A0E515",
  yellow: "#FFDD57",
  orange: "#FF7F0F",
  red: "#F34444",
};

function getStatsColor(hpLevel) {
  if (hpLevel <= 20) {
    return statsColor.red; // Red for low HP
  } else if (hpLevel <= 40) {
    return statsColor.orange; // Orange for moderate HP
  } else if (hpLevel <= 60) {
    return statsColor.yellow; // Yellow for moderate HP
  } else if (hpLevel <= 70) {
    return statsColor["lgt-green"]; // Light green for low high HP
  } else if (hpLevel <= 80) {
    return statsColor["mid-green"]; // Mid green for high HP
  } else {
    return statsColor["drk-green"]; // Dark green for very high HP
  }
}

function createColorSpan(type, hpLevel) {
  const colorTypeSpan = document.createElement("span");
  colorTypeSpan.innerHTML = type;
  colorTypeSpan.classList.add("pokemon-type-span", getStatsColor(hpLevel));
  statsInfoContainer.appendChild(colorTypeSpan);
  return colorTypeSpan;
}
