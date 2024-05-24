import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AccountType {
    id: number;
    name: string;
    statusMessage: string;
    profilePicture: string;
}

const friendsSlice = createSlice({
    name: 'friendList',
    initialState: {
        friendList: [ //Initial value for testing replace with api later
            {
                id: 2,
                name: 'cat2',
                statusMessage: 'cat2',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            },
            {
                id: 3,
                name: 'cat3',
                statusMessage: 'cat3',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            },
            {
                id: 4,
                name: 'cat4',
                statusMessage: 'cat4',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            },
            {
                id: 5,
                name: 'cat5',
                statusMessage: 'cat5',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            },
            {
                id: 6,
                name: 'cat6',
                statusMessage: 'cat6',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            },
            {
                id: 7,
                name: 'cat7',
                statusMessage: 'cat7',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            },
            {
                id: 8,
                name: 'cat8',
                statusMessage: 'cat8',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            },
            {
                id: 9,
                name: 'cat9',
                statusMessage: 'cat9',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            },
            {
                id: 10,
                name: 'cat10',
                statusMessage: 'cat10',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            },
            {
                id: 11,
                name: 'cat11',
                statusMessage: 'cat11',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            },
            {
                id: 12,
                name: 'cat12',
                statusMessage: 'cat12',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            },
            {
                id: 13,
                name: 'cat13',
                statusMessage: 'cat13',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            },
            {
                id: 14,
                name: 'cat14',
                statusMessage: 'cat14',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            },
            {
                id: 15,
                name: 'cat15',
                statusMessage: 'cat15',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            },
            {
                id: 16,
                name: 'cat16',
                statusMessage: 'cat16',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            },
            {
                id: 17,
                name: 'cat17',
                statusMessage: 'cat17',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            },
            {
                id: 18,
                name: 'cat18',
                statusMessage: 'cat18',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            },
            {
                id: 19,
                name: 'cat19',
                statusMessage: 'cat19',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            },
            {
                id: 20,
                name: 'cat20',
                statusMessage: 'cat20',
                profilePicture: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
            }
        ] as AccountType[],
    },
    reducers: {
        addFriend(state, action: PayloadAction<AccountType>) {
            state.friendList.push(action.payload)
        },
        removeFriend(state, action: PayloadAction<AccountType>) {
            const id = action.payload.id;
            state.friendList = state.friendList.filter(friend => friend.id !== id);
        },
    }
})

export const { addFriend, removeFriend } = friendsSlice.actions;
export const friendsReducer = friendsSlice.reducer;