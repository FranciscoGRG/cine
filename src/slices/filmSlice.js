import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  films: [],
  isLoading: false,
  selectedFilm: null,
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    startLoadingFilms: (state) => {
      state.isLoading = true;
    },
    setFilms: (state, action) => {
      state.isLoading = false;
      state.films = action.payload;
    },
    setSelectedFilm: (state, action) => {
      state.selectedFilm = action.payload;
    },
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { startLoadingFilms, setFilms, setSelectedFilm, setGenres} = filmsSlice.actions;
export default filmsSlice.reducer;
