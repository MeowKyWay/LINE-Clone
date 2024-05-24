import { configureStore } from "@reduxjs/toolkit";
import { AccountType, friendsReducer } from "./slice/friendsSlice";
import { statesReducer } from "./slice/statesSlice";
import { GroupType, groupsReducer } from "./slice/groupsSlice";
import { termsReducer } from "./slice/termsSlice";
import { ChatType, chatsReducer } from "./slice/chatsSlice";
import { UserType, userReducer } from "./slice/userSlice";

export interface StoreType {
    user: {
        currentUser: UserType,
    }
    friends: {
        friendList: AccountType[],
    },
    groups: {
        groupList: GroupType[],
    },
    chats: {
        chatList: ChatType[],
    }
    states: {
        friendListState: boolean,
        groupListState: boolean,
        chatFolderState: string,
    }
    terms: {
        friendsTerm: string,
        chatsTerm: string,
    }
}

const store = configureStore({
    reducer: {
        user: userReducer,
        friends: friendsReducer,
        groups: groupsReducer,
        chats: chatsReducer,
        states: statesReducer,
        terms: termsReducer,
    }
});

export {
    store
}