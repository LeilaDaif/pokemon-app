import { fetchPokemon } from './api.js'
import { displayPokemon } from './ui.js'

let allePokemon =[];
async function app(){
  const data = await fetchPokemon();
  allePokemon = data.results
  displayPokemon(allePokemon)
}

app()


//zoek, filter en sorteren
const search = document.getElementById('search');
search.addEventListener('input', () => {
  const gefilterd = allePokemon.filter(pokemon => 
    pokemon.name.includes(search.value.toLowerCase()) 
)
displayPokemon(gefilterd)
})

