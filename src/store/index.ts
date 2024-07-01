import { configureStore } from "@reduxjs/toolkit";
import { friendsReducer } from "./slice/friendsSlice";
import { statesReducer } from "./slice/statesSlice";
import { groupsReducer } from "./slice/groupsSlice";
import { termsReducer } from "./slice/termsSlice";
import { chatsReducer } from "./slice/chatsSlice";
import { userReducer } from "./slice/userSlice";
import { friendRecommendReducer } from "./slice/friendRecommendSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        friends: friendsReducer,
        friendsRecommend: friendRecommendReducer,
        groups: groupsReducer,
        chats: chatsReducer,
        states: statesReducer,
        terms: termsReducer,
    }
});

export { store }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch