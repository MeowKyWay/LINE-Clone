import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../API";
import { addFriend, fetchFriendRequest, fetchUserFriends } from "../thunks/friendsThunk";


const friendsSlice = createSlice({
    name: 'friendList',
    initialState: {
        friends: {
            data: null as User[] | null,
            error: "",
        },
        friendRequests: { 
            data: null as User[] | null,
            error: "",
        },
        error: "",
    }, extraReducers(builder) {
        builder.addCase(fetchUserFriends.fulfilled, (state, action) => {
            state.friends.data = action.payload;
            state.friends.error = "";
        })
        builder.addCase(fetchUserFriends.rejected, (state, action) => {
            state.friends.error = action.error.message ?? "";
        })

        builder.addCase(addFriend.fulfilled , (state, action) => {
            if (!state.friends.data) return;
            state.friends.data.push(action.payload)
            state.friends.error = "";
        })
        builder.addCase(addFriend.rejected , (state, action) => {
            console.log(action)
            state.error = action.payload as string;
        })

        builder.addCase(fetchFriendRequest.fulfilled, (state, action) => {
            state.friendRequests.data = action.payload;
        })
        builder.addCase(fetchFriendRequest.rejected, (state, action) => {
            state.friendRequests.error = action.error.message ?? "";
        })
    },
    reducers: {

    }
})
export const friendsReducer = friendsSlice.reducer;