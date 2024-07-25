import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../API";

const statesSlice = createSlice({
    name: 'states',
    initialState: {
        friendListState: true,
        groupListState: false,
        friendRequestListState: true,
        favoriteFriendsListState: true,
        activeChat: null as string | null,
        chatFolderState: 'All',
        accountModalState: null as User | null,
        settingModalState: false
    },
    reducers: {
        setFriendListState(state, action: PayloadAction<boolean>) {
            state.friendListState = action.payload;
        },
        setFriendRequestListState(state, action: PayloadAction<boolean>) {
            state.friendRequestListState = action.payload;
        },
        setFavoriteFriendListState(state, action: PayloadAction<boolean>) {
            state.favoriteFriendsListState = action.payload;
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
        setAccountModalState(state, action: PayloadAction<User | null>) {
            state.accountModalState = action.payload;
        },
        setSettingModalState(state, action: PayloadAction<boolean>) {
            state.settingModalState = action.payload;
        },

        clearStates(state) {
            state.friendListState = true;
            state.groupListState = true;
            state.friendRequestListState = true;
            state.favoriteFriendsListState = true;
            state.chatFolderState = 'All';
            state.activeChat = null;
            state.accountModalState = null;
            state.settingModalState = false;
        }
    }
})

export const {
    setFriendListState,
    setGroupListState,
    setChatFolderState,
    setFriendRequestListState,
    setFavoriteFriendListState,
    setActiveChat,
    setAccountModalState,
    setSettingModalState,
    clearStates
} = statesSlice.actions;
export const statesReducer = statesSlice.reducer;