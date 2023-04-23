export default function getPokemon(pokemonNames) {
    const pokemonPromises = pokemonNames.map(name => {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          
          xhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${name}`);
          xhr.responseType = "json";
    
          xhr.onload = function() {
            if (xhr.status === 200) {
              resolve(xhr.response);
            } else {
              reject(`Error fetching ${name}`);
            }
          };
    
          xhr.send();
        });
      });
    
      return Promise.all(pokemonPromises);
}

