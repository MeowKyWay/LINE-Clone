import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ChatType {
    id: number;
    name: string;
    profilePicture: string;
    memberCount?: string;
    associatedID: number; //Id of group or friend to ref
    type: 'group' | 'friend';
    lastMessage: {
        message?: string;
        time?: number;
    };
    lastUpdate: number;
    unread: number;
}

const chatsSlice = createSlice({
    name: 'chatList',
    initialState: {
        chatList: [ //Initial value for testing replace with api later
            {
                id: 1,
                name: 'cat2',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
                associatedID: 2,
                type: 'friend',
                lastMessage: {
                    message: 'Hi there!',
                    time: new Date('2024-05-21T12:00:00Z').getTime(),
                },
                lastUpdate: new Date('2024-05-21T12:00:00Z').getTime(),
                unread: 1,
            },
            {
                id: 2,
                name: 'cat3',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
                associatedID: 3,
                type: 'friend',
                lastMessage: {
                    message: 'Hello!',
                    time: new Date('2024-04-21T12:00:00Z').getTime(),
                },
                lastUpdate: new Date('2024-04-21T12:00:00Z').getTime(),
                unread: 10,
            },
            {
                id: 3,
                name: 'Cat group 1',
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
                associatedID: 1,
                type: 'group',
                lastMessage: {
                    message: 'What up!',
                    time: new Date('2024-03-21T12:00:00Z').getTime(),
                },
                lastUpdate: new Date('2024-03-21T12:00:00Z').getTime(),
                unread: 100,
            },
            {
                id: 4,
                name: 'Cat group 2',
                profilePicture: 'https://static01.nyt.com/images/2019/10/01/science/00SCI-CATS1/merlin_102054072_34962289-a2a4-4c52-9969-4b2719347e76-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
                associatedID: 2,
                type: 'group',
                lastMessage: {
                },
                lastUpdate: new Date('2024-10-21T12:00:00Z').getTime(),
                unread: 0,
            },
        ] as ChatType[] | null,
    },
    reducers: {
        newChat(state, action: PayloadAction<ChatType>) {
            if (!state.chatList) return;
            state.chatList.push(action.payload)
        },
        removeChat(state, action: PayloadAction<ChatType>) {
            if (!state.chatList) return;
            const id = action.payload.id;
            state.chatList = state.chatList.filter(chat => chat.id !== id);
        },
    }
})

export const { newChat, removeChat } = chatsSlice.actions;
export const chatsReducer = chatsSlice.reducer;