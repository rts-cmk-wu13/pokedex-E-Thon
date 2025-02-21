let divElmInner = document.createElement("div");
divElmInner.className = "pokelist";

let header = document.querySelector("header")
header.innerHTML = `
<h1>Pokédex</h1>
`

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
    divElms.className = "pokelist__div"

    divElms.innerHTML = data.results
      .map(function (pokemon) {
        let id = pokemon.url.slice(0, -1).split("/").pop();

        return `
        <article class="pokemon">
            <a href="detail.html">
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
