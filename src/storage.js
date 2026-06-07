export function getFavorite (){
 return JSON.parse(localStorage.getItem('favorite')) || [];
}


export function saveFavorite (pokemon){
const favorite = getFavorite ();
favorite.push(pokemon)
localStorage.setItem('favorite', JSON.stringify(favorite))
}


export function deleteFavorite(pokemon){
const favorite = getFavorite();
const nieuw = favorite.filter(fav => fav.name !== pokemon.name)
localStorage.setItem('favorite', JSON.stringify(nieuw))
}