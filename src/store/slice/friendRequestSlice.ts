import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../API";
import { fetchUsersRecommend } from "../thunks/fetchUsersRecommend";

const friendRequestSlice = createSlice({
    name: 'friendRecommend',
    initialState: {
        friendRequestList: [] as User[]
    },
    extraReducers(builder) {
        builder.addCase(fetchUsersRecommend.fulfilled, (state, action) => {
            state.friendRequestList = action.payload;
        })
    },
    reducers: {

    }
})


export const friendRequestReducer = friendRequestSlice.reducer;