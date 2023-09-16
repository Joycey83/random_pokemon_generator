// These variables grab the HTML elements needed to interact with the DOM
const pokemonName = document.querySelector(".pokemon-name");
const generateBtn = document.querySelector(".generate-btn");
const pokemonStats = document.querySelector(".stats-info");

// Arrays of pokemon characters
let pokemon = [
  "Dedenne",
  "Cinccino",
  "Charizard",
  "Snivy",
  "Pikachu",
  "Bulbasaur",
];

function generatePokemon() {
  const randPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
  console.log(randPokemon);
}

// Arrays of objects that hold the pokemon characters information

let pokemonChar = [
  {
    name: "Dedenne",
    img: "",
    species: "Antenna Pokémon",
    type: ["electric", "fairy"],
  },
  {
    name: "Cinccino",
    img: "",
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
