import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const termsSlice = createSlice({
    name: 'terms',
    initialState: {
        friendsTerm: '',
        chatsTerm: '',
    },
    reducers: {
        setFriendsTerms(state, action: PayloadAction<string>) {
            state.friendsTerm = action.payload;
        },
        setChatsTerms(state, action: PayloadAction<string>) {
            state.chatsTerm = action.payload;
        },
    }
})

export const { setFriendsTerms, setChatsTerms } = termsSlice.actions;
export const termsReducer = termsSlice.reducer;