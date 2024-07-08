import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const statesSlice = createSlice({
    name: 'states',
    initialState: {
        friendListState: true,
        groupListState: true,
        friendRequestListState: true,
        chatFolderState: 'All',
    },
    reducers: {
        setFriendListState(state, action: PayloadAction<boolean>) {
            state.friendListState = action.payload;
        },
        setFriendRequestListState(state, action: PayloadAction<boolean>){
            state.friendRequestListState = action.payload;
        },
        setGroupListState(state, action: PayloadAction<boolean>) {
            state.groupListState = action.payload;
        },
        setChatFolderState(state, action: PayloadAction<string>) {
            state.chatFolderState = action.payload;
        }
    }
})

export const { setFriendListState, setGroupListState, setChatFolderState , setFriendRequestListState} = statesSlice.actions;
export const statesReducer = statesSlice.reducer;