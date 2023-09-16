// These variables grab the HTML elements needed to interact with the DOM
const pokemonName = document.querySelector(".pokemon-name");
const generateBtn = document.querySelector(".generate-btn");
const pokemonStats = document.querySelector(".stats-info");

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
    img: "./resources/images/Cinccino.jpg",
    species: "Scarf Pokémon",
    type: "normal",
  },
  {
    name: "Charizard",
    img: "",
    species: "",
    type: "",
  },
  {
    name: "Snivy",
    img: "",
    species: "Grass Snake Pokémon",
    type: "grass",
  },
  {
    name: "Pikachu",
    img: "",
    species: "Mouse Pokémon",
    type: "electric",
  },
  {
    name: "Bulbasaur",
    img: "",
    type: "Seed Pokémon",
    species: ["grass", "posion"],
  },
];

function generatePokemon() {
  const randPokemonIndex = Math.floor(Math.random() * pokemonChar.length);
  const randPokemon = pokemonChar[randPokemonIndex];

  // Update DOM elements with Pokémon information
  pokemonName.textContent = randPokemon.name;
  document.querySelector(".pokemon-img").src = randPokemon.img; // Set the image source
  document.querySelector(
    ".pokemon-species"
  ).textContent = `Species: ${randPokemon.species}`;

  // Handle cases where  there is more than one pokemon'type' 
  if (Array.isArray(randPokemon.type)) {
    document.querySelector(
      ".pokemon-type"
    ).textContent = `Types: ${randPokemon.type.join(", ")}`;
  } else {
    document.querySelector(
      ".pokemon-type"
    ).textContent = `Type: ${randPokemon.type}`;
  }
}

generatePokemon();
