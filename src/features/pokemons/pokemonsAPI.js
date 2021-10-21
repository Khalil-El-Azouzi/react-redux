import "bootstrap/dist/css/bootstrap.min.css"


export function fetchGenerationPokemon(urlAPI){
    return fetch(urlAPI)
        .then(res => res.json())
        .then(
            (data) => { return { data : data  }; },
            (error) => { return error}
        )
}
