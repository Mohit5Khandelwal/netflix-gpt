import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name: 'gpt',
    initialState: {
        isGptClick: false
    },
    reducers: {
        toggleIsGptClick: (state, action) => {
            state.isGptClick = !state.isGptClick;
        }
    }
});

export const  { toggleIsGptClick } = geminiSlice.actions;
export default geminiSlice.reducer;