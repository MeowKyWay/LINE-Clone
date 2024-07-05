import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../API";
import { fetchFriendRequest } from "../thunks/friendsThunk";

const friendRequestSlice = createSlice({
    name: 'friendRecommend',
    initialState: {
        friendRequestList: [] as User[]
    },
    extraReducers(builder) {
        builder.addCase(fetchFriendRequest.fulfilled, (state, action) => {
            state.friendRequestList = action.payload;
        })
    },
    reducers: {

    }
})


export const friendRequestReducer = friendRequestSlice.reducer;