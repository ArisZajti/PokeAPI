document.querySelector("#search").addEventListener("click", getPokemon);
function getPokemon(e) {
    const name = document.querySelector("#pokemonName").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response)=>response.json()).then((data)=> {
        document.querySelector(".pokemonBox").innerHTML = `
        <div>
        <img src="${data.sprites.other["official-artwork"].front_default}"
        alt="${data.name}"
        />
        </div>
        <div class="pokemonInfos">
        <h1>${data.name}</h1>
        <p>Weight: ${data.weight}Kg</p>
        <p>Height: ${data.height}M</p>
        <p>Type: ${data.types[0].type.name}</p>
        </div>
       `;
    })
    .catch((err)=>{
        console.log("Pokemon not Found", err);
    })
    e.preventDefault();
}