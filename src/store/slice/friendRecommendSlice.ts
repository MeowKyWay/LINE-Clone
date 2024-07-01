import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FriendRecommendType{
    id: number;
    name: string;
    addByStatus: string;
    profilePicture: string;
}

const friendRecommendSlice = createSlice({
    name: 'friendRecommend',
    initialState: {
        friendRecommendList: [
            {
                id: 1,
                name: 'first',
                addByStatus: 'Added you by phone number',
                profilePicture: 'https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWV8ZW58MHx8MHx8fDA%3D',
            },
            {
                id: 2,
                name: 'second',
                addByStatus: '',
                profilePicture: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1lfGVufDB8fDB8fHww',
            },
            {
                id: 3,
                name: 'third',
                addByStatus: 'Added you by phone number',
                profilePicture: 'https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWV8ZW58MHx8MHx8fDA%3D',
            },
            {
                id: 2,
                name: 'cat2',
                addByStatus: 'Added you by phone number',
                profilePicture: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1lfGVufDB8fDB8fHww',
            },
            {
                id: 2,
                name: 'cat2',
                addByStatus: 'Added you by phone number',
                profilePicture: 'https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWV8ZW58MHx8MHx8fDA%3D',
            },
            {
                id: 2,
                name: 'cat2',
                addByStatus: 'Added you by phone number',
                profilePicture: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1lfGVufDB8fDB8fHww',
            },
            {
                id: 2,
                name: 'cat2',
                addByStatus: 'Added you by phone number',
                profilePicture: 'https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWV8ZW58MHx8MHx8fDA%3D',
            },
            {
                id: 2,
                name: 'cat2',
                addByStatus: '',
                profilePicture: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1lfGVufDB8fDB8fHww',
            },
            {
                id: 2,
                name: 'cat2',
                addByStatus: 'Added you by phone number',
                profilePicture: 'https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWV8ZW58MHx8MHx8fDA%3D',
            },
            {
                id: 2,
                name: 'cat2',
                addByStatus: 'Added you by phone number',
                profilePicture: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1lfGVufDB8fDB8fHww',
            },
            {
                id: 2,
                name: 'cat2',
                addByStatus: '',
                profilePicture: 'https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWV8ZW58MHx8MHx8fDA%3D',
            },
            {
                id: 2,
                name: 'cat2',
                addByStatus: 'Added you by phone number',
                profilePicture: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1lfGVufDB8fDB8fHww',
            },

            {
                id: 2,
                name: 'cat2',
                addByStatus: 'Added you by phone number',
                profilePicture: 'https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWV8ZW58MHx8MHx8fDA%3D',
            },
            {
                id: 2,
                name: 'cat2',
                addByStatus: 'Added you by phone number',
                profilePicture: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1lfGVufDB8fDB8fHww',
            },
            {
                id: 2,
                name: 'cat2',
                addByStatus: 'Added you by phone number',
                profilePicture: 'https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWV8ZW58MHx8MHx8fDA%3D',
            },
            {
                id: 2,
                name: 'cat2',
                addByStatus: '',
                profilePicture: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1lfGVufDB8fDB8fHww',
            },
            {
                id: 2,
                name: 'cat2',
                addByStatus: 'Added you by phone number',
                profilePicture: 'https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWV8ZW58MHx8MHx8fDA%3D',
            },
            {
                id: 15,
                name: 'last',
                addByStatus: 'Added you by phone number',
                profilePicture: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1lfGVufDB8fDB8fHww',
            },

        ] as FriendRecommendType[]
    },
    reducers: {

    }
})


export const friendRecommendReducer = friendRecommendSlice.reducer;