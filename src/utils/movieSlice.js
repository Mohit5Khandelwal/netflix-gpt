import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailer: null
    },
    reducers: {
        addMovie: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload;
        }
    }
});

export const { addMovie, addTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;