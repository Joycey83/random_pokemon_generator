let pokemonChar = [
  {
    name: "Dedenne",
    img: "./resources/images/Dedenne.png",
    species: "Antenna Pokémon",
    type: ["electric", "fairy"],
    stats: {
      HP: 67,
      Attack: 58,
      Defense: 57,
      "Sp.Atk": 81,
      "Sp.Def": 67,
      Speed: 101,
      Total: 431,
    },
  },
  {
    name: "Cinccino",
    img: "./resources/images/cinccino.png",
    species: "Scarf Pokémon",
    type: "normal",
    stats: {
      HP: 75,
      Attack: 95,
      Defense: 60,
      "Sp.Atk": 65,
      "Sp.Def": 60,
      Speed: 115,
      Total: 470,
    },
  },
  {
    name: "Charizard",
    img: "./resources/images/Charizard.png",
    species: "Flame Pokémon",
    type: ["fire", "flying"],
    stats: {
      HP: 78,
      Attack: 84,
      Defense: 78,
      "Sp.Atk": 109,
      "Sp.Def": 85,
      Speed: 100,
      Total: 534,
    },
  },
  {
    name: "Snivy",
    img: "./resources/images/Snivy.png",
    species: "Grass Snake Pokémon",
    type: "grass",
    stats: {
      HP: 45,
      Attack: 45,
      Defense: 55,
      "Sp.Atk": 45,
      "Sp.Def": 55,
      Speed: 63,
      Total: 308,
    },
  },
  {
    name: "Pikachu",
    img: "./resources/images/Pikachu.png",
    species: "Mouse Pokémon",
    type: "electric",
    stats: {
      HP: 35,
      Attack: 55,
      Defense: 40,
      "Sp.Atk": 50,
      "Sp.Def": 50,
      Speed: 90,
      Total: 320,
    },
  },
  {
    name: "Bulbasaur",
    img: "resources/images/Bulbasaur.png",
    species: "Seed Pokémon",
    type: ["grass", "poison"],
    stats: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      "Sp.Atk": 65,
      "Sp.Def": 65,
      Speed: 45,
      Total: 318,
    },
  },
  {
    name: "Charmander",
    img: "resources/images/Charmander.png",
    species: "Lizard Pokémon",
    type: "fire",
    stats: {
      HP: 39,
      Attack: 52,
      Defense: 43,
      "Sp.Atk": 60,
      "Sp.Def": 50,
      Speed: 65,
      Total: 309,
    },
  },
  {
    name: "Squirtle",
    img: "resources/images/squirtle.png",
    species: "Tiny Turtle Pokémon",
    type: "water",
    stats: {
      HP: 44,
      Attack: 48,
      Defense: 65,
      "Sp.Atk": 50,
      "Sp.Def": 64,
      Speed: 43,
      Total: 314,
    },
  },
  {
    name: "Jigglypuff",
    img: "resources/images/jigglypuff.png",
    species: "Balloon Pokémon",
    type: ["normal", "fairy"],
    stats: {
      HP: 115,
      Attack: 45,
      Defense: 20,
      "Sp.Atk": 45,
      "Sp.Def": 25,
      Speed: 20,
      Total: 270,
    },
  },
  {
    name: "Gastly",
    img: "resources/images/gastly.png",
    species: "Gas Pokémon",
    type: ["ghost", "poison"],
    stats: {
      HP: 30,
      Attack: 35,
      Defense: 30,
      "Sp.Atk": 100,
      "Sp.Def": 35,
      Speed: 80,
      Total: 310,
    },
  },
  {
    name: "Mew",
    img: "resources/images/mew.png",
    species: "New Species Pokémon",
    type: "Psychic",
    stats: {
      HP: 30,
      Attack: 35,
      Defense: 30,
      "Sp.Atk": 100,
      "Sp.Def": 35,
      Speed: 80,
      Total: 310,
    },
  },
  {
    name: "Glalie",
    img: "resources/images/glalie.webp",
    species: "Face Pokémon",
    type: "Ice",
    stats: {
      HP: 30,
      Attack: 35,
      Defense: 30,
      "Sp.Atk": 100,
      "Sp.Def": 35,
      Speed: 80,
      Total: 310,
    },
  },
  {
    name: "Swampert",
    img: "resources/images/swampert.png",
    species: "Mud Fish Pokémon",
    type: ["water", "ground"],
    stats: {
      HP: 30,
      Attack: 35,
      Defense: 30,
      "Sp.Atk": 100,
      "Sp.Def": 35,
      Speed: 80,
      Total: 310,
    },
  },
  {
    name: "Scizor",
    img: "resources/images/scizor.png",
    species: "Pincer Pokémon",
    type: ["bug", "steel"],
    stats: {
      HP: 30,
      Attack: 35,
      Defense: 30,
      "Sp.Atk": 100,
      "Sp.Def": 35,
      Speed: 80,
      Total: 310,
    },
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

export default pokemonChar;
