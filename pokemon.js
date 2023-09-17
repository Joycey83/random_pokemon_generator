// These variables grab the HTML elements needed to interact with the DOM
const pokemonName = document.querySelector(".pokemon-name");
const pokemonStats = document.querySelector(".stats-info");
const generateBtn = document.querySelector("#generate-btn");
const close = document.querySelector("#close-btn");
const typeContainer = document.querySelector(".pokemon-type");

// Arrays of objects that hold the pokemon characters information

let pokemonChar = [
  {
    name: "Dedenne",
    img: "./resources/images/Dedenne.png",
    species: "Antenna Pokémon",
    type: ["electric", "fairy"],
  },
  {
    name: "Cinccino",
    img: "./resources/images/cinccino.png",
    species: "Scarf Pokémon",
    type: "normal",
  },
  {
    name: "Charizard",
    img: "./resources/images/Charizard.png",
    species: "Flame Pokémon",
    type: ["fire", "flying"],
  },
  {
    name: "Snivy",
    img: "./resources/images/Snivy.png",
    species: "Grass Snake Pokémon",
    type: "grass",
  },
  {
    name: "Pikachu",
    img: "./resources/images/Pikachu.png",
    species: "Mouse Pokémon",
    type: "electric",
  },
  {
    name: "Bulbasaur",
    img: "resources/images/Bulbasaur.png",
    species: "Seed Pokémon",
    type: ["grass", "poison"],
  },
  {
    name: "Charmander",
    img: "resources/images/Charmander.png",
    species: "Lizard Pokémon",
    type: "fire",
  },
  {
    name: "Squirtle",
    img: "resources/images/squirtle.png",
    species: "Tiny Turtle Pokémon",
    type: "water",
  },
  {
    name: "Jigglypuff",
    img: "resources/images/jigglypuff.png",
    species: "Balloon Pokémon",
    type: ["normal", "fairy"],
  },
  {
    name: "Gastly",
    img: "resources/images/gastly.png",
    species: "Gas Pokémon",
    type: ["ghost", "poison"],
  },
  {
    name: "Mew",
    img: "resources/images/mew.png",
    species: "New Species Pokémon",
    type: "Psychic",
  },
  {
    name: "Glalie",
    img: "resources/images/glalie.webp",
    species: "Face Pokémon",
    type: "Ice",
  },
  {
    name: "Swampert",
    img: "resources/images/swampert.png",
    species: "Mud Fish Pokémon",
    type: ["water", "ground"],
  },
  {
    name: "Scizor",
    img: "resources/images/scizor.png",
    species: "Pincer Pokémon",
    type: ["bug", "steel"],
  },
  {
    name: "Nidoqueen",
    img: "resources/images/",
    species: "Drill Pokémon",
    type: ["poison", "ground"],
  },
  {
    name: "Sandslash",
    img: "resources/images/sandlash.png",
    species: "Mouse Pokémon",
    type: "ground",
  },
  {
    name: "Oddish",
    img: "resources/images/oddish.png",
    species: "Weed Pokémon",
    type: ["grass", "poison"],
  },
  {
    name: "Snorlax",
    img: "resources/images/snorlax.png",
    species: "Sleeping Pokémon",
    type: "normal",
  },
];
// console.log(pokemonChar);

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

  // Clear any previous type spans from the last image
  typeContainer.innerHTML = "";

  // Handle cases where  there is more than one pokemon'type'
  if (Array.isArray(randPokemon.type)) {
    randPokemon.type.forEach((type) => {
      typeSpan = createTypeSpan(type);
    });
  } else {
    // Add a class for styling
    typeSpan = createTypeSpan(randPokemon.type);
    typeContainer.appendChild(typeSpan);
  }
}

// Created a span function for the types/type of pokemon
function createTypeSpan(type) {
  const typeSpan = document.createElement("span");
  typeSpan.innerHTML = type;
  typeSpan.classList.add("pokemon-type-span"); // Add a class for styling
  typeContainer.appendChild(typeSpan);
  return typeSpan;
}

generateBtn.addEventListener("click", generatePokemon);
