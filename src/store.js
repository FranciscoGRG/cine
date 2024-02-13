// store.js
import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './slices/filmSlice';

const store = configureStore({
    reducer: {
        films: filmsReducer,
    },
});

export default store;
