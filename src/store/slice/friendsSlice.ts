import { createSlice } from "@reduxjs/toolkit";
import { fetchUserFriends } from "../thunks/fetchUserFriends";
import { addUserFriend } from "../thunks/addUserFriend";
import type { UserFriend } from "../../API";

export interface AccountType {
    id: number;
    name: string;
    statusMessage: string;
    profilePicture: string;
}

const friendsSlice = createSlice({
    name: 'friendList',
    initialState: {
        friendList: [] as UserFriend[],
    }, extraReducers(builder) {
        builder.addCase(fetchUserFriends.fulfilled, (state, action) => {
            state.friendList = action.payload;
        })
        builder.addCase(addUserFriend.fulfilled , (state ,action) => {
            state.friendList.push(action.payload)
        })
    },
    reducers: {

    }
})
export const friendsReducer = friendsSlice.reducer;