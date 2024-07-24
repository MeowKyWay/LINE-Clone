import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../API";
import {  addFavoriteFriend, addFriend, fetchFriendRequest, fetchUserFriends, removeFavoriteFriend } from "../thunks/friendsThunk";


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
        favoriteFriends: {
            data: null as User[] | null,
            error: "",
        },
        error: "",
    }, extraReducers(builder) {
        builder.addCase(fetchUserFriends.fulfilled, (state, action) => {
            state.friends.data = action.payload.allFriends || [];
            state.favoriteFriends.data = action.payload.favoriteFriends
            state.friends.error = "";
        })
        builder.addCase(fetchUserFriends.rejected, (state, action) => {
            state.friends.error = action.error.message ?? "";
        })

        builder.addCase(addFriend.fulfilled, (state, action) => {
            if (state.friends.data) {
                state.friends.data.push(action.payload)
                state.friends.error = "";
            }
            if (state.friendRequests.data) {
                state.friendRequests.data = state.friendRequests.data.filter((user) => user.id !== action.payload.id)
            }
        })
        builder.addCase(addFriend.rejected, (state, action) => {
            state.error = action.payload as string;
        })

        builder.addCase(fetchFriendRequest.fulfilled, (state, action) => {
            state.friendRequests.data = action.payload || [];
        })
        builder.addCase(fetchFriendRequest.rejected, (state, action) => {
            state.friendRequests.error = action.error.message ?? "";
        })

        builder.addCase(addFavoriteFriend.fulfilled, (state, action) => {
            console.log("action: ",action);
            if(!state.friends.data) return;
            const friend = state.friends.data.find(friend => friend.id === action.payload);
            if(!friend) return;
            state.favoriteFriends.data?.push(friend);
        })

        builder.addCase(addFavoriteFriend.rejected, (state, action) => {
            state.favoriteFriends.error = action.error.message ?? ""
        })

        builder.addCase(removeFavoriteFriend.fulfilled, (state, action) => {
            console.log("action: ",action);
            if(!state.friends.data) return;
            const friend = state.friends.data.find(friend => friend.id === action.payload);
            if(!friend) return;
            state.favoriteFriends.data = state.favoriteFriends.data?.filter(
                friend => friend.id !== action.payload
            ) as User[];
        })

        builder.addCase(removeFavoriteFriend.rejected, (state, action) => {
            state.favoriteFriends.error = action.error.message ?? ""
        })

    },
    reducers: {
        addFriendRequest(state, action) {
            if (!state.friendRequests.data) return;
            state.friendRequests.data.push(action.payload);
        }
    }
})

export const { addFriendRequest } = friendsSlice.actions;
export const friendsReducer = friendsSlice.reducer;