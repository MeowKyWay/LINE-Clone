import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../API";
import { fetchUsersRecommend } from "../thunks/fetchUsersRecommend";

const friendRecommendSlice = createSlice({
    name: 'friendRecommend',
    initialState: {
        friendRecommendList: [] as User[]
    },
    extraReducers(builder) {
        builder.addCase(fetchUsersRecommend.fulfilled, (state, action) => {
            state.friendRecommendList = action.payload;
        })
    },
    reducers: {

    }
})


export const friendRecommendReducer = friendRecommendSlice.reducer;