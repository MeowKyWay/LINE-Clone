import { createSlice } from "@reduxjs/toolkit";
import { fetchUser, uploadUserProfileImage, changeStatusMessage, updateUserProfile } from "../thunks/userThunk";
import { fetchProfileImage, fetchCoverImage } from "../thunks/imagesThunk";

export interface UserType {
    id: string;
    name: string;
    email: string;
    lineID: string;
    statusMessage: string;
    chatFolders: string;
    image?: string | null | undefined
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
            state.currentUser = action.payload as UserType;
            state.error = "";
        })
        builder.addCase(fetchUser.rejected, (state) => {
            state.currentUser = null;
            state.error = "Failed to fetch user";
        })

        builder.addCase(fetchProfileImage.fulfilled, (state, action) => {
            if (state.currentUser) {
                state.currentUser.image = action.payload
            }
        })

        builder.addCase(fetchProfileImage.rejected, (state, action) => {
            state.error = action.error.message || "Failed to fetchProfileImage";
            console.log(state.error);
        })

        builder.addCase(fetchCoverImage.fulfilled, (state, action) => {
            if (state.currentUser) {
                state.currentUser.coverImage = action.payload
            }
        })

        builder.addCase(fetchCoverImage.rejected, (state, action) => {
            state.error = action.error.message || "Failed to fetchCoverImage";
            console.log(state.error);
        })


        builder.addCase(uploadUserProfileImage.fulfilled, (state, action) => {
            if (state.currentUser) {
                state.currentUser.image = action.payload;
            }
        })
        builder.addCase(uploadUserProfileImage.rejected, (state, action) => {
            state.error = action.error.message || "Failed to set profile image";
            console.log(state.error);

        })
        builder.addCase(updateUserProfile.fulfilled, (state, action) => {
            if (!state.currentUser) return;
            state.currentUser.name = action.payload.name;
            state.currentUser.statusMessage = action.payload.statusMessage;
        })
        builder.addCase(updateUserProfile.rejected, (state, action) => {
            state.error = action.error.message || "Failed to update user profile";
            console.log(state.error);

        })
    },
    reducers: {
    },
})

export const userReducer = userSlice.reducer;