const getDataFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character')
      .then((resp) => resp.json())
      .then((data) => {
        const charactersArray = data.results.map((character) => {
          return {
            name: character.name,
            id: character.id,
            status: character.status,
            img: character.image,
            species: character.species,
            origin: character.origin.name,
            episode: character.episode.length,
          };
        });
        return charactersArray.sort((a,b)=>{
            return a.name < b.name ? -1 : 1;
        });
      });
  };
  export default getDataFromApi;
  