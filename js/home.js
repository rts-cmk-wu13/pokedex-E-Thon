let divElmInner = document.createElement("div");
divElmInner.className = "pokelist";

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

    divElms.innerHTML = data.results
      .map(function (pokemon) {
        let id = pokemon.url.slice(0, -1).split("/").pop();

        return `
        <article class="single_pokemon">
            <a href="detail.html">
                <p>#${id}</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" alt="${pokemon.name}">
                <h2>${pokemon.name}</h2>
            </a>
        </article>
        `;
      })
      .join("");
    divElmInner.appendChild(divElms);
  });
document.querySelector("main").append(divElmInner);
