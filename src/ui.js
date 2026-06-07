import { fetchPokemonData } from "./api.js";

//kaartjes aanmaken
// hier heb ik geen async nodig want geen await nodig
export function createCard(pokemon, detail) {
    const card = document.createElement('div');
    card.textContent = pokemon.name;
    const img = document.createElement('img');
    img.src = detail.sprites.front_default
    card.appendChild(img)
    return card
    
}

// Kaartjes tonen
export async function displayPokemon(pokemonList){
    const grid = document.getElementById("pokemon-grid");
    grid.innerHTML = ''
    for (const pokemon of pokemonList){
         const detail = await fetchPokemonData(pokemon.url)
         const card = createCard(pokemon, detail)
        grid.appendChild(card)
    }
}


