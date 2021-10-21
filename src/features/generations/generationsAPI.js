
export function fetchPokemonGenerations(urlAPI = "https://pokeapi.co/api/v2/generation") {
    return fetch(urlAPI)
            .then(res => res.json())
            .then(
                (data) => { return { data : data  }; },
                (error) => { return error}
            )
}


