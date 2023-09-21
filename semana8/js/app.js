// Pokemon API
// https://pokeapi.co/api/v2/pokemon/ditto

// como hacer que el array pase a lis

const form = document.querySelector("#form");
const input = document.querySelector("#input-pokemon");
const imgPokemon = document.querySelector("#pokemon-img");
const namePokemon = document.querySelector("#pokemon-name");
const pokemonAbilities = document.querySelector("#pokemon-abilities");
const stats = document.querySelector("#stats")

new Chart(stats, {
    type: "bar",
    data: {
      labels: [
        "Attack",
        "HP",
        "defense",
        "special-attack",
        "special-defense",
        "speed",
      ],
      datasets: [
        {
          label: "Pokemon data",
          data: [40, 50, 20, 10, 30, 80],
        },
      ],
    },
  });

function renderItemList(name) {
    // return `<li class="flex gap-2 items-center">
    //           <img src="./assets/icons/check.svg" width="20" alt="" />
    //           ${name}
    //         </li>`;

    const li = document.createElement("li");
    const img = document.createElement("img");
    const span = document.createElement("span");
    li.classList.add("flex", "gap-2", "items-center")
    img.src = "./assets/icons/check.svg"
    img.width = 20
    span.textContent = name
    
    li.appendChild(img)
    li.appendChild(span)
    return li
}

form.onsubmit = async function (event) {
  event.preventDefault();

  const url = `https://pokeapi.co/api/v2/pokemon/${input.value}`;

  // hacer la peticion
  const response = await fetch(url);
  const pokemon = await response.json();
  namePokemon.textContent = pokemon.name;
  imgPokemon.src = pokemon.sprites.other["official-artwork"].front_default;

  pokemonAbilities.innerHTML = ""

  pokemon.abilities.forEach(function(item) {
    // console.log(ability.ability.name); 
    // pokemonAbilities.innerHTML += renderItemList(item.ability.name)
    pokemonAbilities.appendChild(renderItemList(item.ability.name))
    });
};

