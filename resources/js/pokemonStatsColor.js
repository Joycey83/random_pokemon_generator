// Defined a mapping of stat color level to CSS classes

const statsColor = {
  "drk-green": "#00C2B8",
  "mid-green": "#23CD5E",
  "lgt-green": "#A0E515",
  yellow: "#FFDD57",
  orange: "#FF7F0F",
  red: "#F34444",
};

// Create a function to get the CSS class for a given type
function getStatsColor(type) {
  return statsColor[type.toLowerCase()] || "pokemon-type-span";
}

// Usage in your code
function createColorSpan(type) {
  const ColorTypeSpan = document.createElement("span");
  ColorTypeSpan.innerHTML = type;
  ColorTypeSpan.classList.add("pokemon-type-span", getStatsColor(type));
  statsInfoContainer.appendChild(ColorTypeSpan);
  return ColorTypeSpan;
}
