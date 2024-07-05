import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/fetchUser";

export interface UserType {
    name: string;
    email: string;
    lineID: string;
    statusMessage: string;
}

const initialState = {
    currentUser: null as UserType | null,
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