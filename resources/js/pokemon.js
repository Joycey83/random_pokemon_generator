import pokemonChar from "./pokemonData.js";

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

  // Update DOM elements with Pokémon information
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
  for (const statName in randPokemon.stats) {
    if (randPokemon.stats.hasOwnProperty(statName)) {
      const statValue = randPokemon.stats[statName];
      const statsSpan = createStatTypeSpan(`${statName} : ${statValue}`);
      statsSpan.classList.add(createColorSpan(statName));
      statsInfoContainer.appendChild(statsSpan);
    }
  }
}

// Created a span function for the stats of the pokemon
function createStatTypeSpan(statType) {
  const statsSpan = document.createElement("span");
  statsSpan.innerHTML = statType;
  statsSpan.classList.add("pokemon-stats-span");
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
