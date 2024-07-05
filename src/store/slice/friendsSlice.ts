import { createSlice } from "@reduxjs/toolkit";
import { fetchUserFriends } from "../thunks/fetchUserFriends";
import { addUserFriend } from "../thunks/addUserFriend";
import type { UserFriend } from "../../API";


const friendsSlice = createSlice({
    name: 'friendList',
    initialState: {
        friends: {
            data: null as UserFriend[] | null,
            error: "",
        },
        friendRequests: { 
            data: null as UserFriend[] | null,
            error: "",
        },
        error: "",
    }, extraReducers(builder) {
        builder.addCase(fetchUserFriends.fulfilled, (state, action) => {
            state.friends.data = action.payload;
        })
        builder.addCase(addUserFriend.fulfilled , (state ,action) => {
            state.friends.data?.push(action.payload)
        })
    },
    reducers: {

    }
})
export const friendsReducer = friendsSlice.reducer;