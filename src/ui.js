export function displayPokemon(pokemonList){
    const grid = document.getElementById("pokemon-grid");
    pokemonList.forEach(pokemon => {
       const card = document.createElement('div')
       card.textContent = pokemon.name
       grid.appendChild(card)
    });
}