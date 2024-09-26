import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import geminiSlice from "./geminiSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        movies:movieSlice,
        gpt: geminiSlice
    }
});

export default store;


