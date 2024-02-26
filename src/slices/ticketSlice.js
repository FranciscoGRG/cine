import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickets: [],
  isLoading: false,
  selectedFilm: null,
};

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    startLoadingTickets: (state) => {
      state.isLoading = true;
    },
    setTickets: (state, action) => {
      state.isLoading = false;
      state.tickets = action.payload;
    },
  },
});

export const { startLoadingTickets, setTickets} = ticketSlice.actions;
export default ticketSlice.reducer;
