// These variables grab the HTML elements needed to interact with the DOM
const pokemonName = document.querySelector(".pokemon-name");
const pokemonStats = document.querySelector(".stats-info");
const generateBtn = document.querySelector("#generate-btn");
const close = document.querySelector("#close-btn");

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
    type: ["normal","fairy"],
  },
  {
    name: "Gastly",
    img: "resources/images/gastly.png",
    species: "Gas Pokémon",
    type: ["ghost","poison"],
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
    name: "",
    img: "resources/images/",
    species: "",
    type: "",
  },
  {
    name: "",
    img: "resources/images/",
    species: "",
    type: "",
  },
  {
    name: "",
    img: "resources/images/",
    species: "",
    type: "",
  },
  {
    name: "",
    img: "resources/images/",
    species: "",
    type: "",
  },
  {
    name: "",
    img: "resources/images/",
    species: "",
    type: "",
  },
  {
    name: "",
    img: "resources/images/",
    species: "",
    type: "",
  },
];

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

  generateBtn.innerHTML = "Gotta catch them all!";
}

generateBtn.addEventListener("click", generatePokemon);

// text return function

function textReturn() {
  generateBtn.textContent = "Generate Pokemon";
}

close.addEventListener("click", textReturn);
