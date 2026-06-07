export async function fetchPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
        const data = await response.json()
        return data
    }catch (error) {
        console.error("Er is iets mis gegaan");
    }
    
}

export async function fetchPokemonData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error){
        console.error("Er is iets mis gegaan")
    }
    
}