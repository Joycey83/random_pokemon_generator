// Defined a mapping of stat color level to CSS classes
// Define a mapping of stat names to CSS classes
const statsColor = {
  hp: "red",
  attack: "orange",
  defense: "yellow",
  specialAttack: "green",
  specialDefense: "blue",
  speed: "purple",
  // Add more stats and colors as needed later on
};

// Updated createColorSpan function to use the statsColor mapping
function createColorSpan(statName) {
  // Use the stat name to retrieve the corresponding color from the mapping
  const colorClass = statsColor[statName.toLowerCase()] || "pokemon-type-span";

  // Create and return the color span
  const colorTypeSpan = document.createElement("span");
  colorTypeSpan.innerHTML = statName; // You might want to customize this based on your needs
  colorTypeSpan.classList.add("pokemon-type-span", colorClass);
  statsInfoContainer.appendChild(colorTypeSpan);
  return colorTypeSpan;
}
