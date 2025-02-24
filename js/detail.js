let search = window.location.search;
let params = new URLSearchParams(search);
let id = params.get("id");

fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then((response) => response.json())
  .then((data) => {
    let headerElm = document.querySelector("header");
    let detailHeader = document.createElement("section");
    detailHeader.className = "detailheader";
    let mainElm = document.querySelector("main");
    let pokemonDetail = document.createElement("section");
    let pokemonDescription = document.createElement("div");
    let pokemonStats = document.createElement("section");

    pokemonDetail.classList.add("pokemondetail");
    pokemonDescription.classList.add("pokemondescription");
    pokemonStats.classList.add("pokemonstats");

    detailHeader.innerHTML = `
    <i class="fa-solid fa-arrow-left"></i>
    <h1>${data.name}</h1>
    <p class="caption">#${id.padStart(3, "0")}</p>
    `;

    pokemonDetail.innerHTML = `
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" alt="${
      data.name
    }">
    <ul class="pokemondetail__types">
        <li class="pokemondetail__type">${data.types[0]?.type.name || ""}</li>
        <li class="pokemondetail__type">${data.types[1]?.type.name || ""}</li>
        <!-- ? tjekker om dataen eksisterer, hvis ikke, så returneres en tom streng -->
        <li class="pokemondetail__type">${data.types[2]?.type.name || ""}</li>
    </ul>
    <h2 class="pokemondetail__about">About</h2>
    <table class="pokemondetail__table">
        <tr class="pokemondetail__tr">
            <td class="pokemondetail__td body3">
                <img src="../img/weight.png" alt="Pokemon weight"> ${data.weight/10} kg
            </td>
            <td class="pokemondetail__td body3">
                <img src="../img/ruler.png" alt="Pokemon height"> ${data.height/10} m
            </td>
            <td class="pokemondetail__td body3">
            ${data.abilities[0].ability.name}<br>
            ${data.abilities[1]?.ability.name || ''}     
            </td>
        </tr>
        <tr class="pokemondetail__tr">
            <td class="pokemondetail__td caption">
                Weight               
            </td>
            <td class="pokemondetail__td caption">
                Height
            </td>
            <td class="pokemondetail__td caption">
                Moves
            </td>
        </tr>
    </table>
    `;

    pokemonDescription.innerHTML = `
    <div>her skal jeg hente et fetch herfra: "https://pokeapi.co/api/v2/pokemon-species/${id}/".flavor_text_entries[9].flavor_text</div>
    `;

    pokemonStats.innerHTML = `
    <h2>Base Stats</h2>
    <table class="pokemonstats__table">
        <tr class="pokemonstats__tr">
            <td class="pokemonstats__td">hp</td>
            <td class="pokemonstats__td"></td>
            <td class="pokemonstats__td"></td>
        </tr>
        <tr class="pokemonstats__tr">
            <td class="pokemonstats__td">atk</td>
            <td class="pokemonstats__td"></td>
            <td class="pokemonstats__td"></td>
        </tr>
        <tr class="pokemonstats__tr">
            <td class="pokemonstats__td">def</td>
            <td class="pokemonstats__td"></td>
            <td class="pokemonstats__td"></td>
        </tr>
        <tr class="pokemonstats__tr">
            <td class="pokemonstats__td">satk</td>
            <td class="pokemonstats__td"></td>
            <td class="pokemonstats__td"></td>
        </tr>
        <tr class="pokemonstats__tr">
            <td class="pokemonstats__td">sdef</td>
            <td class="pokemonstats__td"></td>
            <td class="pokemonstats__td"></td>
        </tr>
        <tr class="pokemonstats__tr">
            <td class="pokemonstats__td">spd</td>
            <td class="pokemonstats__td"></td>
            <td class="pokemonstats__td"></td>
        </tr>
        
    </table>
    `;

    let rootElm = document.querySelector("#root");

    headerElm.appendChild(detailHeader);
    mainElm.append(pokemonDetail, pokemonDescription, pokemonStats);

    // TYPE COLORS:
    if (data.types[0].type.name == "normal") {
      rootElm.style.backgroundColor = "#AAA67F";
      document.querySelector(".pokemondetail__about").style.color = "#AAA67F";
      document.querySelector(".pokemondetail__about").style.color = "#AAA67F";
      document.querySelector(".pokemondetail__about").style.color = "#AAA67F";
      document.querySelector(".pokemondetail__about").style.color = "#AAA67F";
    }
    if (data.types[0].type.name == "fighting") {
      rootElm.style.backgroundColor = "#C12239";
      rootElm.style.backgroundColor = "#C12239";
      rootElm.style.backgroundColor = "#C12239";
      rootElm.style.backgroundColor = "#C12239";
      rootElm.style.backgroundColor = "#C12239";
    }
    if (data.types[0].type.name == "flying") {
      rootElm.style.backgroundColor = "#A891EC";
      rootElm.style.backgroundColor = "#A891EC";
      rootElm.style.backgroundColor = "#A891EC";
      rootElm.style.backgroundColor = "#A891EC";
      rootElm.style.backgroundColor = "#A891EC";
    }
    if (data.types[0].type.name == "poison") {
      rootElm.style.backgroundColor = "#A43E9E";
      rootElm.style.backgroundColor = "#A43E9E";
      rootElm.style.backgroundColor = "#A43E9E";
      rootElm.style.backgroundColor = "#A43E9E";
      rootElm.style.backgroundColor = "#A43E9E";
    }
    if (data.types[0].type.name == "ground") {
      rootElm.style.backgroundColor = "#DEC16B";
      rootElm.style.backgroundColor = "#DEC16B";
      rootElm.style.backgroundColor = "#DEC16B";
      rootElm.style.backgroundColor = "#DEC16B";
      rootElm.style.backgroundColor = "#DEC16B";
    }
    if (data.types[0].type.name == "rock") {
      rootElm.style.backgroundColor = "#B69E31";
      rootElm.style.backgroundColor = "#B69E31";
      rootElm.style.backgroundColor = "#B69E31";
      rootElm.style.backgroundColor = "#B69E31";
      rootElm.style.backgroundColor = "#B69E31";
    }
    if (data.types[0].type.name == "bug") {
      rootElm.style.backgroundColor = "#A7B723";
      rootElm.style.backgroundColor = "#A7B723";
      rootElm.style.backgroundColor = "#A7B723";
      rootElm.style.backgroundColor = "#A7B723";
      rootElm.style.backgroundColor = "#A7B723";
    }
    if (data.types[0].type.name == "ghost") {
      rootElm.style.backgroundColor = "#70559B";
      rootElm.style.backgroundColor = "#70559B";
      rootElm.style.backgroundColor = "#70559B";
      rootElm.style.backgroundColor = "#70559B";
      rootElm.style.backgroundColor = "#70559B";
    }
    if (data.types[0].type.name == "steel") {
      rootElm.style.backgroundColor = "#B7B9D0";
      rootElm.style.backgroundColor = "#B7B9D0";
      rootElm.style.backgroundColor = "#B7B9D0";
      rootElm.style.backgroundColor = "#B7B9D0";
      rootElm.style.backgroundColor = "#B7B9D0";
    }
    if (data.types[0].type.name == "fire") {
      rootElm.style.backgroundColor = "#F57D31";
      rootElm.style.backgroundColor = "#F57D31";
      rootElm.style.backgroundColor = "#F57D31";
      rootElm.style.backgroundColor = "#F57D31";
      rootElm.style.backgroundColor = "#F57D31";
    }
    if (data.types[0].type.name == "water") {
      rootElm.style.backgroundColor = "#6493EB";
      rootElm.style.backgroundColor = "#6493EB";
      rootElm.style.backgroundColor = "#6493EB";
      rootElm.style.backgroundColor = "#6493EB";
      rootElm.style.backgroundColor = "#6493EB";
    }
    if (data.types[0].type.name == "grass") {
      rootElm.style.backgroundColor = "#74CB48";
      document.querySelector(".pokemondetail__about").style.color = "#74CB48";
      document.querySelector(".pokemondetail__about").style.color = "#74CB48";
      document.querySelector(".pokemondetail__about").style.color = "#74CB48";
      document.querySelector(".pokemondetail__about").style.color = "#74CB48";
    }
    if (data.types[0].type.name == "electric") {
      rootElm.style.backgroundColor = "#F9CF30";
      rootElm.style.backgroundColor = "#F9CF30";
      rootElm.style.backgroundColor = "#F9CF30";
      rootElm.style.backgroundColor = "#F9CF30";
      rootElm.style.backgroundColor = "#F9CF30";
    }
    if (data.types[0].type.name == "psychic") {
      rootElm.style.backgroundColor = "#FB5584";
      rootElm.style.backgroundColor = "#FB5584";
      rootElm.style.backgroundColor = "#FB5584";
      rootElm.style.backgroundColor = "#FB5584";
      rootElm.style.backgroundColor = "#FB5584";
    }
    if (data.types[0].type.name == "ice") {
      rootElm.style.backgroundColor = "#9AD6DF";
      rootElm.style.backgroundColor = "#9AD6DF";
      rootElm.style.backgroundColor = "#9AD6DF";
      rootElm.style.backgroundColor = "#9AD6DF";
      rootElm.style.backgroundColor = "#9AD6DF";
    }
    if (data.types[0].type.name == "dragon") {
      rootElm.style.backgroundColor = "#7037FF";
      rootElm.style.backgroundColor = "#7037FF";
      rootElm.style.backgroundColor = "#7037FF";
      rootElm.style.backgroundColor = "#7037FF";
      rootElm.style.backgroundColor = "#7037FF";
    }
    if (data.types[0].type.name == "dark") {
      rootElm.style.backgroundColor = "#75574C";
      rootElm.style.backgroundColor = "#75574C";
      rootElm.style.backgroundColor = "#75574C";
      rootElm.style.backgroundColor = "#75574C";
      rootElm.style.backgroundColor = "#75574C";
    }
    if (data.types[0].type.name == "fairy") {
      rootElm.style.backgroundColor = "#E69EAC";
      rootElm.style.backgroundColor = "#E69EAC";
      rootElm.style.backgroundColor = "#E69EAC";
      rootElm.style.backgroundColor = "#E69EAC";
      rootElm.style.backgroundColor = "#E69EAC";
    }
    if (data.types[0].type.name == "stellar") {
      rootElm.style.backgroundColor = "#40B5A5";
      rootElm.style.backgroundColor = "#40B5A5";
      rootElm.style.backgroundColor = "#40B5A5";
      rootElm.style.backgroundColor = "#40B5A5";
      rootElm.style.backgroundColor = "#40B5A5";
    }
    if (data.types[0].type.name == "unknown") {
      rootElm.style.backgroundColor = "#68A090";
      rootElm.style.backgroundColor = "#68A090";
      rootElm.style.backgroundColor = "#68A090";
      rootElm.style.backgroundColor = "#68A090";
      rootElm.style.backgroundColor = "#68A090";
    }
  });
