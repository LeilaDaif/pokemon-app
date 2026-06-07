import { fetchPokemon } from './api.js'
import { displayPokemon } from './ui.js'

async function app(){
  const data = await fetchPokemon();
  displayPokemon(data.results)
}

app()

