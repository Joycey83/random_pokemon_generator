import pokemonChar from "./pokemonData.js";
import getBackgroundColor from "./pokemonStatsValue.js";
// import createStatColorSpan from "./pokemonStatsColor.js";

// These variables grab the HTML elements needed to interact with the DOM
const pokemonName = document.querySelector(".pokemon-name");
const generateBtn = document.querySelector("#generate-btn");
const close = document.querySelector("#close-btn");
const typeContainer = document.querySelector(".pokemon-type");
const statsInfoContainer = document.querySelector(".pokemon-stats");

// Arrays of objects that hold the pokemon characters information

function generatePokemon() {
  const randPokemonIndex = Math.floor(Math.random() * pokemonChar.length);
  //   Access the random pokemon characters by index
  const randPokemon = pokemonChar[randPokemonIndex];

  // Update DOM elements with Pokémon information taken from the pokemon char object array
  pokemonName.textContent = randPokemon.name;
  document.querySelector(".pokemon-img").src = randPokemon.img; // Set the image source
  document.querySelector(
    ".pokemon-species"
  ).textContent = `Species: ${randPokemon.species}`;
  document.querySelector(
    ".pokemon-stats"
  ).textContent = `Stats: ${randPokemon.stats}`;

  // Clear any previous type spans from the last image
  typeContainer.innerHTML = "";

  // Handle cases where  there is more than one pokemon'type'
  if (Array.isArray(randPokemon.type)) {
    randPokemon.type.forEach((type) => {
      // Declare typeSpan here to make it local to the forEach loop
      const typeSpan = createTypeSpan(type);
      typeSpan.classList.add(createColorSpan(type));
    });
  } else {
    // Add a class for styling
    const typeSpan = createTypeSpan(randPokemon.type);
    typeSpan.classList.add(createColorSpan(randPokemon.type));
    typeContainer.appendChild(typeSpan);
  }

  // Clear any previous stats spans
  statsInfoContainer.innerHTML = "";
  // Create and append stats spans
  // for (const statName in randPokemon.stats) {
  //   if (randPokemon.stats.hasOwnProperty(statName)) {
  //     const statValue = randPokemon.stats[statName];
  //     const statsSpan = createStatTypeSpan(`${statName} : ${statValue}`);
  //     statsSpan.classList.add(createStatColorSpan(statName)); // Updated line
  //     statsInfoContainer.appendChild(statsSpan);
  //   }
  // }
  // Clear any previous stats spans
  statsInfoContainer.innerHTML = "";

  // Created and append stats spans
  for (const statName in randPokemon.stats) {
    if (randPokemon.stats.hasOwnProperty(statName)) {
      const statValue = randPokemon.stats[statName];

      // Created stats span
      const statsSpan = createStatTypeSpan(`${statName} : ${statValue}`);

      // Add background color class
      // statsSpan.classList.add(createStatColorSpan(statName));

      // Change background color using style property
      statsSpan.style.backgroundColor = getBackgroundColor(statValue);

      // Append stats span to container
      statsInfoContainer.appendChild(statsSpan);
    }
  }
}
// function getBackgroundColor(statValue) {
//   return statValue > 65
//     ? "lightgreen"
//     : statValue < 65
//     ? "lightcoral"
//     : "transparent";
// }

// Updated createStatTypeSpan function to use statType instead of statName
function createStatTypeSpan(statType) {
  const statsSpan = document.createElement("span");
  statsSpan.innerHTML = statType;
  statsSpan.classList.add(createColorSpan(statType));
  statsInfoContainer.appendChild(statsSpan);
  return statsSpan;
}

// Created a span function for the types/type of pokemon
function createTypeSpan(type) {
  const typeSpan = document.createElement("span");
  typeSpan.innerHTML = type;
  typeContainer.appendChild(typeSpan);
  return typeSpan;
}

// File was getting too squashed up with code, so created external file and imported this function

// function createStatColorSpan(statType) {
//   const statColors = {
//     hp: "hp-type",
//     attack: "attack-type",
//     defense: "defense-type",
//     "sp.atk": "sp-atk-type",
//     "sp.def": "sp-def-type",
//     speed: "speed-type",
//   };

//   return statColors[statType.toLowerCase()] || "pokemon-type-span";
// }

// create a color span for the pokemon type
function createColorSpan(type) {
  switch (type.toLowerCase()) {
    case "grass":
      return "grass-type";
    case "fire":
      return "fire-type";
    case "water":
      return "water-type";
    case "poison":
      return "poison-type";
    case "rock":
      return "rock-type";
    case "ground":
      return "ground-type";
    case "normal":
      return "normal-type";
    case "flying":
      return "flying-type";
    case "bug":
      return "bug-type";
    case "electric":
      return "electric-type";
    case "fairy":
      return "fairy-type";
    case "psychic":
      return "psychic-type";
    case "ice":
      return "ice-type";
    case "fighting":
      return "fighting-type";
    case "ghost":
      return "ghost-type";
    case "dark":
      return "dark-type";
    case "steel":
      return "steel-type";
    case "dragon":
      return "dragon-type";
    default:
      return "pokemon-type-span";
  }
}

generateBtn.addEventListener("click", generatePokemon);
