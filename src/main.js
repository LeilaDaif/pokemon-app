import { fetchPokemon, fetchPokemonData } from './api.js'
import { displayPokemon } from './ui.js'

let allePokemon =[];
async function app(){
  const data = await fetchPokemon();
  allePokemon = await Promise.all(data.results.map(pokemon => fetchPokemonData(pokemon.url)))
  displayPokemon(allePokemon)
  types()
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

async function types(){
  const filter = document.getElementById('filter-type')
  const toegevoegdeType = []
  for(let pokemon of allePokemon){
    const type = pokemon.types[0].type.name; 
    if(!toegevoegdeType.includes(type)){
      toegevoegdeType.push(type)
    const option = document.createElement('option');
    option.value = type
    option.textContent = type
    filter.appendChild(option)
    }
  }
    filter.addEventListener('change', () => {
    const gekozenType = filter.value
    const gefilterd = allePokemon.filter(pokemon => 
       pokemon.types[0].type.name === gekozenType)
       displayPokemon(gefilterd)
  })

}