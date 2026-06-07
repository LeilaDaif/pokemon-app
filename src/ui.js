//kaartjes aanmaken
// hier heb ik geen async nodig want geen await nodig
export function createCard(pokemon) {
    const card = document.createElement('div');
    card.textContent = pokemon.name;
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default
    card.appendChild(img)
    return card
    
}

// Kaartjes tonen
export function displayPokemon(pokemonList){
    const grid = document.getElementById("pokemon-grid");
    grid.innerHTML = ''
    pokemonList.forEach(pokemon => {
          const card = createCard(pokemon)
          grid.appendChild(card)
        })
    };
        


