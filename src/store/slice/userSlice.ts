import { createSlice } from "@reduxjs/toolkit";
import { fetchUser , setProfileUser , setStatusMessage} from "../thunks/userThunk";

export interface UserType {
    name: string;
    email: string;
    lineID: string;
    statusMessage: string;
    chatFolders: string;
    image?: string | null
    coverImage?: string | null
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
        builder.addCase(setProfileUser.fulfilled, (state, action) => {
            if (state.currentUser) {
                state.currentUser.image = action.payload;
            }
        })
        builder.addCase(setProfileUser.rejected, (state, action) => {
            state.error = action.error.message || "Failed to set profile image";
            console.log(state.error);
            
        })
        builder.addCase(setStatusMessage.fulfilled, (state, action) => {
            if (state.currentUser) {
                state.currentUser.statusMessage = action.payload;
            }
        })
        builder.addCase(setStatusMessage.rejected, (state, action) => {
            state.error = action.error.message || "Failed to set status message";
            console.log(state.error);
            
        })
    },
    reducers: {
    },
})

export const userReducer = userSlice.reducer;