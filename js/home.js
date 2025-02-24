let divElmInner = document.createElement("div");
divElmInner.className = "pokelist";

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
    <div class="header__burger">
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

fetch("https://pokeapi.co/api/v2/pokemon", {
  headers: {
    Accept: "application/json",
  },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let divElms = document.createElement("div");
    divElms.className = "pokelist__div";

    divElms.innerHTML = data.results
      .map(function (pokemon) {
        let id = pokemon.url.slice(0, -1).split("/").pop();

        return `
        <article class="pokemon">
            <a href="detail.html?id=${id}">
                <p class="caption">#${id}</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" alt="${pokemon.name}">
                <p class="body3">${pokemon.name}</p>
            </a>
        </article>
        `;
      })
      .join("");
    divElmInner.appendChild(divElms);
  });

document.querySelector("main").append(divElmInner);
