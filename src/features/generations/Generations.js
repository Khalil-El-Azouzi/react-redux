import "bootstrap/dist/css/bootstrap.min.css"
import {useDispatch, useSelector} from "react-redux";
import {generationsAsync, selectGenerationNames} from "./generationsSlice";
import {useEffect, useState} from "react";
import {selectPokemonNames, pokemonAsync, selectPokemonVersion} from "../pokemons/pokemonsSlice";

export function Generations(props) {

    const [,setPokeState] = useState('')

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(generationsAsync());
    },[dispatch]);

    let genNames = useSelector(selectGenerationNames);
    let pokeNames = useSelector(selectPokemonNames);
    let pokeVersion = useSelector(selectPokemonVersion);
    /*store.subscribe(()=>{
        return genNames = store.getState().generation.results.map(gen => gen.name);
    })*/
    // console.log(genNames)

    // const createSelectItems = () => {
    //     let items = [];
    //     for (let i = 0; i< genNames; i++) {
    //         items.push(<option key={i} value={genNames[i]}>{genNames[i]}</option>);
    //     }
    //     return items;
    // }


    const handleDispatch = (event) => {
        const pokeUrl = event.target.value;
        setPokeState(pokeUrl)
        dispatch(pokemonAsync(pokeUrl));
    }

    return(
        <div className="container-fluid mt-3">
            <div className="d-flex justify-content-center">
                <form>
                    <div className="form-inline">
                        <label>Generation :</label>
                        <select className="form-control ml-2"
                                onChange={handleDispatch}>
                            <option disabled value selected={true} > -- select a Generation -- </option>
                            {genNames.map(gen => {
                                return <option key={gen.name} value={gen.url}>{gen.name}</option>;
                                })
                            }
                        </select>
                        {pokeVersion.map(group => {
                            return <span className="badge badge-pill badge-light ml-2" key={group.name}>{group.name}</span>
                        })}
                    </div>
                </form>
            </div>

            {/* eslint-disable-next-line react/style-prop-object */}
            <div className="d-flex justify-content-center" >
                <div className="card mt-2">
                    <div className="card-header">
                        Pokemon's Names
                    </div>
                    <ul className="list-group list-group-flush ">
                        {pokeNames.map(poke => {
                            return <li key={poke.name} className="list-group-item list-group-item-action">
                                {poke.name}</li>
                        })}
                    </ul>
                </div>
            </div>

        </div>
    )
}
