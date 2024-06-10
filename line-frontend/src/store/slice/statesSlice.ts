import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const statesSlice = createSlice({
    name: 'states',
    initialState: {
        friendListState: true,
        groupListState: true,
        friendRecommendState: true,
        chatFolderState: 'All',
    },
    reducers: {
        setFriendListState(state, action: PayloadAction<boolean>) {
            state.friendListState = action.payload;
        },
        setFriendRecommendState(state, action: PayloadAction<boolean>){
            state.friendRecommendState = action.payload;
        },
        setGroupListState(state, action: PayloadAction<boolean>) {
            state.groupListState = action.payload;
        },
        setChatFolderState(state, action: PayloadAction<string>) {
            state.chatFolderState = action.payload;
        }
    }
})

export const { setFriendListState, setGroupListState, setChatFolderState , setFriendRecommendState} = statesSlice.actions;
export const statesReducer = statesSlice.reducer;