export async function fetchPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
        const data = await response.json()
        return data
    }catch (error) {
        console.error("Er is iets mis gegaan");
    }
    
}