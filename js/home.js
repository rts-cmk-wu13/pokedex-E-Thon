//! HEADER:
let header = document.querySelector("header");
header.innerHTML = `
    <div class="header__top">
        <img src="./img/pokeball.svg" alt="Pokedex logo"> 
        <h1>Pokédex</h1>
    </div>
    <div class="header__bottom"> 
        <input type="search" id="search" name="search" placeholder="Search"  aria-label="Search through pokémons">
        <span><i class="fa-solid fa-magnifying-glass"></i></span>
        <button class="header__btn"><i class="fa-solid fa-hashtag"></i></button>
        <div class="header__popup">
            <h4>Sort by:</h4>
            <form class="header__form" action="#">
                <label class="header__container body3" for="number1">Number
                    <input type="checkbox" name="check" id="number1" value="false">
                    <span class="checkmark"></span>
                </label>
                <label class="header__container body3" for="number2">Name
                    <input type="checkbox" name="check" id="number2" value="false">
                    <span class="checkmark"></span>
                </label>
            </form>
        </div>
    </div>
`;

//! POKELIST:
// amount of pokemon count from API:
let count = 0;
fetch(`https://pokeapi.co/api/v2/pokemon/`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    count = data.count;
  });

// observer created:
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      currentOffset = currentOffset + 30;
      if (currentOffset < count) {
        fetchPokemon(currentOffset);
      } else {
        console.log("There are no more pokémons for now");
      }
    }
  });
});

let currentOffset = 0;

let divElmOuter = document.createElement("div");
divElmOuter.className = "pokelist";

function fetchPokemon(offset) {
  fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=30`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let divElms = document.createElement("div");
      divElms.className = "pokelist__div";

      divElms.innerHTML += data.results
        .map(function (pokemon) {
          let id = pokemon.url.slice(0, -1).split("/").pop();

          return `
        <article class="pokemon">
            <a href="detail.html?id=${id}">
                <p class="caption">#${id.padStart(3, "0")}</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" alt="${pokemon.name}">
                <p class="body3">${pokemon.name}</p>
            </a>
        </article>
        `;
        })
        .join("");

      // pokemon being observed:
      let observedPokemon = divElms.querySelector(
        "article:nth-last-of-type(3)"
      );
      observer.observe(observedPokemon);

      // div'er with pokemons added to bigger div
      divElmOuter.appendChild(divElms);
    });

  // pokelist div added to main
  document.querySelector("main").append(divElmOuter);
}

// kalder fetch functionen:
fetchPokemon(currentOffset);
