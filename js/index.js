function fetchPokemon(PokemonName) {
  const pokemonName = PokemonName.toLowerCase();
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Pokémon not found");
      }
      return response.json();
    })
    .then((data) => {
      // Handle the Pokémon data
    })
    .catch((error) => {
      console.error("Error fetching Pokémon data:", error);
    });
}