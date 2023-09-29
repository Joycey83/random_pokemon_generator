let pokemonChar = [
  {
    name: "Dedenne",
    img: "./resources/images/Dedenne.png",
    species: "Antenna Pokémon",
    type: ["electric", "fairy"],
    stats: {
      hp: 67,
      attack: 58,
      defense: 57,
      spAtk: 81,
      spDef: 67,
      speed: 101,
      total: 431,
    },
  },
  {
    name: "Cinccino",
    img: "./resources/images/cinccino.png",
    species: "Scarf Pokémon",
    type: "normal",
    stats: {
      hp: 67,
      attack: 58,
      defense: 57,
      spAtk: 81,
      spDef: 67,
      speed: 101,
      total: 431,
    },
  },
  {
    name: "Charizard",
    img: "./resources/images/Charizard.png",
    species: "Flame Pokémon",
    type: ["fire", "flying"],
    stats: {
      hp: 67,
      attack: 58,
      defense: 57,
      spAtk: 81,
      spDef: 67,
      speed: 101,
      total: 431,
    },
  },
  {
    name: "Snivy",
    img: "./resources/images/Snivy.png",
    species: "Grass Snake Pokémon",
    type: "grass",
    stats: {
      hp: 67,
      attack: 58,
      defense: 57,
      spAtk: 81,
      spDef: 67,
      speed: 101,
      total: 431,
    },
  },
  {
    name: "Pikachu",
    img: "./resources/images/Pikachu.png",
    species: "Mouse Pokémon",
    type: "electric",
    stats: {
      hp: 67,
      attack: 58,
      defense: 57,
      spAtk: 81,
      spDef: 67,
      speed: 101,
      total: 431,
    },
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
    img: "resources/images/nidoqueen.png",
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
    // stats: [45, 50, 60, 70],
  },
  {
    name: "Snorlax",
    img: "resources/images/snorlax.png",
    species: "Sleeping Pokémon",
    type: "normal",
  },
  {
    name: "Poliwrath",
    img: "resources/images/poliwrath.png",
    species: "Tadpole Pokémon",
    type: ["water", "fighting"],
  },
  {
    name: "Golem",
    img: "resources/images/Golem.png",
    species: "Megaton Pokémon",
    type: ["rock", "ground"],
  },
  {
    name: "Articuno",
    img: "resources/images/Articuno.png",
    species: "Freeze Pokémon",
    type: ["ice", "flying"],
  },
  {
    name: "Zapdos",
    img: "resources/images/Zapdos.png",
    species: "Electric Pokémon",
    type: ["electric", "flying"],
  },
  {
    name: "Salamence",
    img: "resources/images/Salamence.png",
    species: "Dragon Pokémon",
    type: ["dragon", "flying"],
  },
  {
    name: "Rayquaza",
    img: "resources/images/Rayquaza.png",
    species: "Sky High Pokémon",
    type: ["dragon", "flying"],
  },
  {
    name: "Metang",
    img: "resources/images/metang.png",
    species: "Iron Claw Pokémon",
    type: ["steel", "psychic"],
  },

  {
    name: "Torterra",
    img: "resources/images/torterra.png",
    species: "Continent Pokémon",
    type: ["grass", "ground"],
  },
  {
    name: "Empoleon",
    img: "resources/images/empoleon.png",
    species: "Emperor Pokémon",
    type: ["water", "steel"],
  },
  {
    name: "Combee",
    img: "resources/images/combee.png",
    species: "Tiny Bee Pokémon",
    type: ["bug", "flying"],
  },
  {
    name: "Stunky",
    img: "resources/images/stunky.png",
    species: "Skunk Pokémon",
    type: ["poison", "dark"],
  },
  {
    name: "Scolipede",
    img: "resources/images/scolipede.webp",
    species: "Megapede Pokémon",
    type: ["bug", "poison"],
  },
  {
    name: "Zoroark",
    img: "resources/images/Zoroark.png",
    species: "Illusion Fox Pokémon",
    type: "dark",
  },
  {
    name: "Escavalier",
    img: "resources/images/Escavalier.png",
    species: "Cavalry Pokémon",
    type: ["bug", "steel"],
  },
  {
    name: "Vanillish",
    img: "resources/images/Vanillish.png",
    species: "Icy Snow Pokémon",
    type: "ice",
  },
  {
    name: "Ferroseed",
    img: "resources/images/ferroseed.png",
    species: "Thorn Seed Pokémon",
    type: ["grass", "steel"],
  },

  {
    name: "Tyrunt",
    img: "resources/images/Tyrunt.png",
    species: "",
    type: "",
  },
  {
    name: "Klinklang",
    img: "resources/images/Klinklang.png",
    species: "",
    type: "",
  },
  {
    name: "Golurk",
    img: "resources/images/Golurk.png",
    species: "",
    type: "",
  },
  {
    name: "Zekrom",
    img: "resources/images/zekrom.png",
    species: "",
    type: "",
  },
];

function createStatsInfo(pokemon) {
  const infoContainer = document.createElement("div");
  infoContainer.className = "stats-span"; 

  const statsElement = document.createElement("span");
  statsElement.textContent = `Stats: ${pokemon.stats}`;

  infoContainer.appendChild(statsElement);
}

const pokemonInfoContainer = document.getElementById("pokemon-info");

// Loop through your pokemonChar array and call createStatsInfo for each Pokémon
pokemonChar.forEach((pokemon) => {
  const infoContainer = createStatsInfo(pokemon);
  pokemonInfoContainer.appendChild(infoContainer);
});

export default pokemonChar;
