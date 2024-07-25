import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const termsSlice = createSlice({
    name: 'terms',
    initialState: {
        friendsTerm: '',
        chatsTerm: '',
        messagesTerm: ''
    },
    reducers: {
        setFriendsTerms(state, action: PayloadAction<string>) {
            state.friendsTerm = action.payload;
        },
        setChatsTerms(state, action: PayloadAction<string>) {
            state.chatsTerm = action.payload;
        },
        setMessagesTerms(state, action: PayloadAction<string>) {
            state.messagesTerm = action.payload;
        },
        
    }
})

export const { setFriendsTerms, setChatsTerms , setMessagesTerms} = termsSlice.actions;
export const termsReducer = termsSlice.reducer;