import { createSlice } from "@reduxjs/toolkit";
import { Chat } from "../../API";
import { fetchFriendChats } from "../thunks/chatsThunk";
import { newMessage } from "../thunks/messageThunk";

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
            state.friendChats.error = '';
        })
        builder.addCase(fetchFriendChats.rejected, (state, action) => {
            state.friendChats.data = null;
            state.friendChats.error = action.payload as string;
        })

        builder.addCase(newMessage.fulfilled, (state, action) => {
            if (!state.friendChats.data) return;
            const chat = state.friendChats.data.find(chat => chat.id === action.payload.chatID);
            if (!chat) return;
            chat.message?.items.push(action.payload);
        })
        builder.addCase(newMessage.rejected, (state, action) => {
            state.friendChats.error = action.payload as string;
        })
    },    
    reducers: {
        addChat(state, action) {
            if (!state.friendChats.data) return;
            state.friendChats.data.push(action.payload);
        }
    },
})

export const { addChat } = chatsSlice.actions;
export const chatsReducer = chatsSlice.reducer;