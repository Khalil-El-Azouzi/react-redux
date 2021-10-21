import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchPokemonGenerations} from "./generationsAPI";

const initialState = {
    count: 0,
    status: 'idle',
    results: [
        {
            name: '',
            url: ''
        }
    ],
    error : null
};

export const generationsAsync = createAsyncThunk(
    'endpoint/generation',
    async (url) => {
        const response = await fetchPokemonGenerations(url);
        return response.data
    }
);

export const generationSlice = createSlice( {
    name: 'generations',
        initialState,
    reducers: {
        getGenerations: (state) => {
            state = {...state, names : state.results.map( item => item.name)}
        }
    },
    extraReducers: (builder => {
        builder
            .addCase(generationsAsync.pending, (state) => {
                state.status = 'Loading';
            })
            .addCase(generationsAsync.fulfilled, (state,action) => {
                state.status = 'succeeded';
                state.count = action.payload.count;
                state.results = action.payload.results;
            })
    })
}
);

export const {getGenerations} = generationSlice.actions;

export const selectGenerationNames = (state) => {return state.generation.results}

export  default generationSlice.reducer;

