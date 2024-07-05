import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../API";
import { fetchUser } from "../thunks/fetchUser";

const initialState = {
    currentUser: null as User | null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers(builder) {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.currentUser = action.payload;
        })
    },
    reducers: {
    },
})

export const userReducer = userSlice.reducer;