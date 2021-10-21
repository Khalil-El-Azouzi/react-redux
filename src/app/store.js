import { configureStore } from '@reduxjs/toolkit';
import generationsReducer from '../features/generations/generationsSlice';
import pokemonsReducer from '../features/pokemons/pokemonsSlice';

export const store = configureStore({
  reducer: {
    generation: generationsReducer,
    generationDetails: pokemonsReducer
  }
});
