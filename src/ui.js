import { getFavorite, saveFavorite, deleteFavorite } from "./storage.js";
//kaartjes aanmaken
// hier heb ik geen async nodig want geen await nodig
export function createCard(pokemon) {
  const card = document.createElement("div");
  card.classList.add("card");

  const name = document.createElement("p");
  name.textContent = pokemon.name;
  card.appendChild(name);

  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default;
  card.appendChild(img);

  const like = document.createElement("button");
  like.textContent = "\u{1F90D}";
  card.appendChild(like);

  let isFavorieten = false;
  like.addEventListener("click", () => {
    isFavorieten = !isFavorieten;
    like.textContent = isFavorieten ? "\u2764\uFE0F" : "\u{1F90D}";
    isFavorieten ? saveFavorite(pokemon) : deleteFavorite(pokemon);
  });

  const favorieten = getFavorite()
  isFavorieten = favorieten.some(fav => fav.name === pokemon.name)
  if(isFavorieten) {like.textContent = '\u2764\uFE0F'}

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        card.classList.add("zichtbaar");
        observer.unobserve(card);
      }
    });
  });
  observer.observe(card);
  return card;

}

// Kaartjes tonen
export function displayPokemon(pokemonList) {
  const grid = document.getElementById("pokemon-grid");
  grid.innerHTML = "";
  pokemonList.forEach((pokemon) => {
    const card = createCard(pokemon);
    grid.appendChild(card);
  });
}
