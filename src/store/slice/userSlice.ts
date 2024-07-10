import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/userThunk";

export interface UserType {
    name: string;
    email: string;
    lineID: string;
    statusMessage: string;
    chatFolders: string;
}

const initialState = {
    currentUser: null as UserType | null,
    error: "",
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers(builder) {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.currentUser = action.payload;
            state.error = "";
        })
        builder.addCase(fetchUser.rejected, (state) => {
            state.currentUser = null;
            state.error = "Failed to fetch user";
        })
    },
    reducers: {
    },
})

export const userReducer = userSlice.reducer;