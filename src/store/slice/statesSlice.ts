import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const statesSlice = createSlice({
    name: 'states',
    initialState: {
        friendListState: true,
        groupListState: false,
        friendRequestListState: true,
        activeChat: null as string | null,
        chatFolderState: 'All',
    },
    reducers: {
        setFriendListState(state, action: PayloadAction<boolean>) {
            state.friendListState = action.payload;
        },
        setFriendRequestListState(state, action: PayloadAction<boolean>) {
            state.friendRequestListState = action.payload;
        },
        setGroupListState(state, action: PayloadAction<boolean>) {
            state.groupListState = action.payload;
        },
        setChatFolderState(state, action: PayloadAction<string>) {
            state.chatFolderState = action.payload;
        },
        setActiveChat(state, action: PayloadAction<string>) {
            state.activeChat = action.payload;
        },

        clearStates(state) {
            state.friendListState = true;
            state.groupListState = true;
            state.friendRequestListState = true;
            state.chatFolderState = 'All';
            state.activeChat = null;
        }
    }
})

export const {
    setFriendListState,
    setGroupListState,
    setChatFolderState,
    setFriendRequestListState,
    setActiveChat,
    clearStates
} = statesSlice.actions;
export const statesReducer = statesSlice.reducer;