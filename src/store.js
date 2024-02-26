// store.js
import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './slices/filmSlice';
import ticketsReducer from './slices/ticketSlice';


const store = configureStore({
    reducer: {
        films: filmsReducer,
        tickets: ticketsReducer,
    },
});

export default store;
