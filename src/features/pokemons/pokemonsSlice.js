import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchGenerationPokemon} from "./pokemonsAPI";


const initialState = {
    id : null,
    status : 'idle',
    pokemon_species : [
        {
            name: '',
            url:''
        }
    ],
    version_groups: [
        {
            name: '',
            url: ''
        }
    ]
}

export const pokemonAsync = createAsyncThunk(
    'endpoint/generation/pokemon',
    async (url) => {
        const response = await fetchGenerationPokemon(url);
        return response.data
    },
)

export const pokemonsSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        getPokemon: (state, action) => {
            pokemonAsync(action.payload);
        }
    },
    extraReducers: (builder => {
        builder
            .addCase(pokemonAsync.pending, (state) => {
                state.status = 'Loading';
            })
            .addCase(pokemonAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.pokemon_species = action.payload.pokemon_species;
                state.id = action.payload.id;
                state.version_groups = action.payload.version_groups;
            })
    })
})

export const selectPokemonNames = (state) => {return state.generationDetails.pokemon_species}
export const selectPokemonVersion = (state) => {return state.generationDetails.version_groups}

export const {getPokemon} = pokemonsSlice.actions;

export  default pokemonsSlice.reducer

