let search = window.location.search;
let params = new URLSearchParams(search);
let id = params.get("id");
console.log("Pokemon ID:", id);

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
        <li class="pokemondetail__type"><h4>${
          data.types[0]?.type.name || ""
        }</h4></li>
        <li class="pokemondetail__type"><h4>${
          data.types[1]?.type.name || ""
        }</h4></li>
        <!-- ? tjekker om dataen eksisterer, hvis ikke, så returneres en tom streng -->
        <li class="pokemondetail__type"><h4>${
          data.types[2]?.type.name || ""
        }</h4></li>
    </ul>
    <h2 class="pokemondetail__about">About</h2>
    <table class="pokemondetail__table">
        <tr class="pokemondetail__tr">
            <td class="pokemondetail__td body3">
                <img src="../img/weight.png" alt="Pokemon weight"> ${
                  data.weight / 10
                } kg
            </td>
            <td class="pokemondetail__td body3">
                <img src="../img/ruler.png" alt="Pokemon height"> ${
                  data.height / 10
                } m
            </td>
            <td class="pokemondetail__td body3">
            ${data.abilities[0].ability.name}<br>
            ${data.abilities[1]?.ability.name || ""}     
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

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then((response) => response.json())
      .then((text) => {
        pokemonDescription.innerHTML = `
    <p class="pokemondescription__text body3">${text.flavor_text_entries[9].flavor_text}</p>
    `;
      });

    pokemonStats.innerHTML = `
    <h2 class="pokemonstats__header">Base Stats</h2>
    <table class="pokemonstats__table">
        <tr class="pokemonstats__tr">
            <td class="pokemonstats__td"><h4>hp</h4></td>
            <td class="pokemonstats__td body3">${String(
              data.stats[0].base_stat
            ).padStart(3, "0")}</td>
            <td class="pokemonstats__td"><meter id="stat" min="0" max="300" value="${String(
              data.stats[0].base_stat
            )}"></meter></td>
        </tr>
        <tr class="pokemonstats__tr">
            <td class="pokemonstats__td"><h4>atk</h4></td>
            <td class="pokemonstats__td body3">${String(
              data.stats[1].base_stat
            ).padStart(3, "0")}</td>
            <td class="pokemonstats__td"><meter id="stat" min="0" max="300" value="${String(
              data.stats[1].base_stat
            )}"></meter></td>
        </tr>
        <tr class="pokemonstats__tr">
            <td class="pokemonstats__td"><h4>def</h4></td>
            <td class="pokemonstats__td body3">${String(
              data.stats[2].base_stat
            ).padStart(3, "0")}</td>
            <td class="pokemonstats__td"><meter id="stat" min="0" max="300" value="${String(
              data.stats[2].base_stat
            )}"></meter></td>
        </tr>
        <tr class="pokemonstats__tr">
            <td class="pokemonstats__td"><h4>satk</h4></td>
            <td class="pokemonstats__td body3">${String(
              data.stats[3].base_stat
            ).padStart(3, "0")}</td>
            <td class="pokemonstats__td"><meter id="stat" min="0" max="300" value="${String(
              data.stats[3].base_stat
            )}"></meter></td>
        </tr>
        <tr class="pokemonstats__tr">
            <td class="pokemonstats__td"><h4>sdef</h4></td>
            <td class="pokemonstats__td body3">${String(
              data.stats[4].base_stat
            ).padStart(3, "0")}</td>
            <td class="pokemonstats__td"><meter id="stat" min="0" max="300" value="${String(
              data.stats[4].base_stat
            )}"></meter></td>
        </tr>
        <tr class="pokemonstats__tr">
            <td class="pokemonstats__td"><h4>spd</h4></td>
            <td class="pokemonstats__td body3">${String(
              data.stats[5].base_stat
            ).padStart(3, "0")}</td>
            <td class="pokemonstats__td"><meter id="stat" min="0" max="300" value="${String(
              data.stats[5].base_stat
            )}"></meter></td>
        </tr>
        
    </table>
    `;

    let rootElm = document.querySelector("#root");

    headerElm.appendChild(detailHeader);
    mainElm.append(pokemonDetail, pokemonDescription, pokemonStats);

    //! TYPE COLORS:
    if (data.types[0].type.name == "normal") {
      rootElm.style.backgroundColor = "#AAA67F";
      document.querySelector(".pokemondetail__about").style.color = "#AAA67F";
      document.querySelector(".pokemonstats__header").style.color = "#AAA67F";
      document.querySelector(".pokemonstats__td h4").style.color = "#AAA67F";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#AAA67F";
      });
    }
    if (data.types[0].type.name == "fighting") {
      rootElm.style.backgroundColor = "#C12239";
      document.querySelector(".pokemondetail__about").style.color = "#C12239";
      document.querySelector(".pokemonstats__header").style.color = "#C12239";
      document.querySelector(".pokemonstats__td h4").style.color = "#C12239";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#C12239";
      });
    }
    if (data.types[0].type.name == "flying") {
      rootElm.style.backgroundColor = "#A891EC";
      document.querySelector(".pokemondetail__about").style.color = "#A891EC";
      document.querySelector(".pokemonstats__header").style.color = "#A891EC";
      document.querySelector(".pokemonstats__td h4").style.color = "#A891EC";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#A891EC";
      });
    }
    if (data.types[0].type.name == "poison") {
      rootElm.style.backgroundColor = "#A43E9E";
      document.querySelector(".pokemondetail__about").style.color = "#A43E9E";
      document.querySelector(".pokemonstats__header").style.color = "#A43E9E";
      document.querySelector(".pokemonstats__td h4").style.color = "#A43E9E";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#A43E9E";
      });
    }
    if (data.types[0].type.name == "ground") {
      rootElm.style.backgroundColor = "#DEC16B";
      document.querySelector(".pokemondetail__about").style.color = "#DEC16B";
      document.querySelector(".pokemonstats__header").style.color = "#DEC16B";
      document.querySelector(".pokemonstats__td h4").style.color = "#DEC16B";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#DEC16B";
      });
    }
    if (data.types[0].type.name == "rock") {
      rootElm.style.backgroundColor = "#B69E31";
      document.querySelector(".pokemondetail__about").style.color = "#B69E31";
      document.querySelector(".pokemonstats__header").style.color = "#B69E31";
      document.querySelector(".pokemonstats__td h4").style.color = "#B69E31";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#B69E31";
      });
    }
    if (data.types[0].type.name == "bug") {
      rootElm.style.backgroundColor = "#A7B723";
      document.querySelector(".pokemondetail__about").style.color = "#A7B723";
      document.querySelector(".pokemonstats__header").style.color = "#A7B723";
      document.querySelector(".pokemonstats__td h4").style.color = "#A7B723";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#A7B723";
      });
    }
    if (data.types[0].type.name == "ghost") {
      rootElm.style.backgroundColor = "#70559B";
      document.querySelector(".pokemondetail__about").style.color = "#70559B";
      document.querySelector(".pokemonstats__header").style.color = "#70559B";
      document.querySelector(".pokemonstats__td h4").style.color = "#70559B";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#70559B";
      });
    }
    if (data.types[0].type.name == "steel") {
      rootElm.style.backgroundColor = "#B7B9D0";
      document.querySelector(".pokemondetail__about").style.color = "#B7B9D0";
      document.querySelector(".pokemonstats__header").style.color = "#B7B9D0";
      document.querySelector(".pokemonstats__td h4").style.color = "#B7B9D0";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#B7B9D0";
      });
    }
    if (data.types[0].type.name == "fire") {
      rootElm.style.backgroundColor = "#F57D31";
      document.querySelector(".pokemondetail__about").style.color = "#F57D31";
      document.querySelector(".pokemonstats__header").style.color = "#F57D31";
      document.querySelector(".pokemonstats__td h4").style.color = "#F57D31";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#F57D31";
      });
    }
    if (data.types[0].type.name == "water") {
      rootElm.style.backgroundColor = "#6493EB";
      document.querySelector(".pokemondetail__about").style.color = "#6493EB";
      document.querySelector(".pokemonstats__header").style.color = "#6493EB";
      document.querySelector(".pokemonstats__td h4").style.color = "#6493EB";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#6493EB";
      });
    }
    if (data.types[0].type.name == "grass") {
      rootElm.style.backgroundColor = "#74CB48";
      document.querySelector(".pokemondetail__about").style.color = "#74CB48";
      document.querySelector(".pokemonstats__header").style.color = "#74CB48";
      document.querySelector(".pokemonstats__td h4").style.color = "#74CB48";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#74CB48";
      });
    }
    if (data.types[0].type.name == "electric") {
      rootElm.style.backgroundColor = "#F9CF30";
      document.querySelector(".pokemondetail__about").style.color = "#F9CF30";
      document.querySelector(".pokemonstats__header").style.color = "#F9CF30";
      document.querySelector(".pokemonstats__td h4").style.color = "#F9CF30";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#F9CF30";
      });
    }
    if (data.types[0].type.name == "psychic") {
      rootElm.style.backgroundColor = "#FB5584";
      document.querySelector(".pokemondetail__about").style.color = "#FB5584";
      document.querySelector(".pokemonstats__header").style.color = "#FB5584";
      document.querySelector(".pokemonstats__td h4").style.color = "#FB5584";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#FB5584";
      });
    }
    if (data.types[0].type.name == "ice") {
      rootElm.style.backgroundColor = "#9AD6DF";
      document.querySelector(".pokemondetail__about").style.color = "#9AD6DF";
      document.querySelector(".pokemonstats__header").style.color = "#9AD6DF";
      document.querySelector(".pokemonstats__td h4").style.color = "#9AD6DF";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#9AD6DF";
      });
    }
    if (data.types[0].type.name == "dragon") {
      rootElm.style.backgroundColor = "#7037FF";
      document.querySelector(".pokemondetail__about").style.color = "#7037FF";
      document.querySelector(".pokemonstats__header").style.color = "#7037FF";
      document.querySelector(".pokemonstats__td h4").style.color = "#7037FF";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#7037FF";
      });
    }
    if (data.types[0].type.name == "dark") {
      rootElm.style.backgroundColor = "#75574C";
      document.querySelector(".pokemondetail__about").style.color = "#75574C";
      document.querySelector(".pokemonstats__header").style.color = "#75574C";
      document.querySelector(".pokemonstats__td h4").style.color = "#75574C";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#75574C";
      });
    }
    if (data.types[0].type.name == "fairy") {
      rootElm.style.backgroundColor = "#E69EAC";
      document.querySelector(".pokemondetail__about").style.color = "#E69EAC";
      document.querySelector(".pokemonstats__header").style.color = "#E69EAC";
      document.querySelector(".pokemonstats__td h4").style.color = "#E69EAC";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#E69EAC";
      });
    }
    if (data.types[0].type.name == "stellar") {
      rootElm.style.backgroundColor = "#40B5A5";
      document.querySelector(".pokemondetail__about").style.color = "#40B5A5";
      document.querySelector(".pokemonstats__header").style.color = "#40B5A5";
      document.querySelector(".pokemonstats__td h4").style.color = "#40B5A5";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#40B5A5";
      });
    }
    if (data.types[0].type.name == "unknown") {
      rootElm.style.backgroundColor = "#68A090";
      document.querySelector(".pokemondetail__about").style.color = "#68A090";
      document.querySelector(".pokemonstats__header").style.color = "#68A090";
      document.querySelector(".pokemonstats__td h4").style.color = "#68A090";
      document.querySelectorAll(".pokemonstats__td meter").forEach((bar) => {
        bar.style.backgroundColor = "#68A090";
      });
    }
  });
