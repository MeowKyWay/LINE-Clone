import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const chatsSlice = createSlice({
    name: 'chatList',
    initialState: {
        chats: {}
    },
    reducers: {
    },
    extraReducers(builder) {
    }
})

export const chatsReducer = chatsSlice.reducer;