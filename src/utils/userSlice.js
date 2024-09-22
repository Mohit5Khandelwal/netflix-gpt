import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {

        addUser: (state,action) => {
            // Data is contain inside the action 
            return action.payload;
        },
        removeUser: (state, action) => {
            return null;
        }

    }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;