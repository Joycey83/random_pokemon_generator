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
    return statsColor.orange; //
  } else if (hpLevel <= 30) {
    return statsColor.yellow;
  } else if (hpLevel <= 60) {
    return statsColor["lgt-green"];
  } else if (hpLevel <= 70) {
    return statsColor["mid-green"];
  } else {
    return statsColor["drk-green"]; // Dark green for high HP
  }
}

function createColorSpan(type, hpLevel) {
  const colorTypeSpan = document.createElement("span");
  colorTypeSpan.innerHTML = type;
  colorTypeSpan.classList.add("pokemon-type-span", getStatsColor(hpLevel));
  statsInfoContainer.appendChild(colorTypeSpan);
  return colorTypeSpan;
}
