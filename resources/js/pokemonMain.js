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
    // Added a class for styling
    const typeSpan = createTypeSpan(randPokemon.type);
    typeSpan.classList.add(createColorSpan(randPokemon.type));
    typeContainer.appendChild(typeSpan);

    // console.log(randPokemon.stats);
  }

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
      statsSpan.style.backgroundColor = getBackgroundColor(statName, statValue);

      // Append stats span to container
      statsInfoContainer.appendChild(statsSpan);
    }
  }
}

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

/*
This JavaScript code is for a Pokémon character generator. Here's a breakdown of what it does:

1. **Imports**: The code imports data and functions from other JavaScript files. `pokemonChar` is an array of Pokémon character data imported from `pokemonData.js`, and `getBackgroundColor` is a function imported from `pokemonStatsValue.js`.

2. **DOM Elements**: The code then grabs HTML elements using `document.querySelector` to interact with the Document Object Model (DOM).

3. **generatePokemon Function**: This function generates a random Pokémon character. It first selects a random Pokémon from the `pokemonChar` array. It then updates the DOM with the selected Pokémon's information, such as name, image, species, and stats. If the Pokémon has more than one type, it creates a span for each type.

4. **createStatTypeSpan Function**: This function creates a span element for a given stat type. It sets the innerHTML of the span to the stat type, adds a color class to the span, appends the span to the `statsInfoContainer`, and returns the span.

5. **createTypeSpan Function**: This function creates a span element for a given Pokémon type. It sets the innerHTML of the span to the type, appends the span to the `typeContainer`, and returns the span.

6. **createColorSpan Function**: This function returns a string representing a CSS class based on the Pokémon type. The returned class can be used to style the Pokémon type span with a color corresponding to the Pokémon type.

The additional code you've provided completes the Pokémon character generator. Here's what the new parts do:

1. **createTypeSpan Function**: This function creates a span element for a given Pokémon type. It sets the innerHTML of the span to the type, appends the span to the `typeContainer`, and returns the span.

2. **createColorSpan Function**: This function returns a string representing a CSS class based on the Pokémon type. The returned class can be used to style the Pokémon type span with a color corresponding to the Pokémon type. If the type does not match any of the cases in the switch statement, it defaults to "pokemon-type-span".

3. **Event Listener**: The `addEventListener` method is used to attach an event handler to the `generateBtn` element. When the button is clicked, the `generatePokemon` function is called, generating a new random Pokémon character.

Now, the code should work as expected, provided that the imported data and functions are correctly defined in their respective files. The `generatePokemon` function will generate a new Pokémon character each time the button with the id `generateBtn` is clicked. The Pokémon's name, image, species, and stats will be displayed, and the Pokémon's type(s) will be styled according to the type. The stats will also be styled with a background color determined by the `getBackgroundColor` function. The `createStatColorSpan` function is still commented out and not used anywhere in the code. If you want to use this function, you need to uncomment it and make sure it's defined in the imported files.


*/
