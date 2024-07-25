import { createSlice } from "@reduxjs/toolkit";
import { Chat, Message } from "../../API";
import { fetchFriendChats } from "../thunks/chatsThunk";

const chatsSlice = createSlice({
    name: 'chatList',
    initialState: {
        friendChats: {
            data: null as Chat[] | null,
            error: ''
        },
        // groupChats: { Todo implement group chats
        //     data: null as Chat[] | null,
        //     error: ''
        // }
    },
    extraReducers(builder) {
        builder.addCase(fetchFriendChats.fulfilled, (state, action) => {
            state.friendChats.data = action.payload;
            for (const chat of state.friendChats.data) {
                chat.message?.items.sort((a, b) => (
                    new Date((a as Message).createdAt).getTime() - new Date((b as Message).createdAt).getTime()
                ))
            }
            state.friendChats.error = '';
        })
        builder.addCase(fetchFriendChats.rejected, (state, action) => {
            state.friendChats.data = null;
            state.friendChats.error = action.payload as string;
        })
    },
    reducers: {
        addChat(state, action) {
            if (!state.friendChats.data) return;
            state.friendChats.data.push(action.payload);
        },
        addMessage(state, action) {
            if (!state.friendChats.data) return;
            const chat = state.friendChats.data.find(chat => chat.id === action.payload.chatID);
            if (!chat) return;
            chat.message?.items.push(action.payload);
        },
        updateChat(state, action) {
            if (!state.friendChats.data) return;
            const chat = state.friendChats.data.find(chat => chat.id === action.payload.id);
            if (!chat) return;
            chat.updatedAt = action.payload.updateAt;
            chat.lastReadTime = action.payload.lastReadTime;
        }
    },
})

export const { addChat, addMessage, updateChat } = chatsSlice.actions;
export const chatsReducer = chatsSlice.reducer;