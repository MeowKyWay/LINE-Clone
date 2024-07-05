import { createSlice } from "@reduxjs/toolkit";

export interface MessageType {
    id: number;
    message: string;
    userId: number;
    chatId: number;
    createdAt: number;
}

const messagesSlice = createSlice({
    name: 'messageList',
    initialState: {
        messageList: [
            {
                id: 1,
                message: "1Helloooooooooooooooooooooooooooowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwo",
                userId: 1,
                chatId: 2,
                createdAt: new Date('2024-05-21T12:00:00Z').getTime()
            },
            {
                id: 2,
                message: "2how r u",
                userId: 77,
                chatId: 2,
                createdAt: new Date('2024-06-01T08:30:00Z').getTime()
            },
            {
                id: 3,
                message: "3It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                userId: 1,
                chatId: 2,
                createdAt: new Date('2022-07-15T14:45:00Z').getTime()
            },
            {
                id: 4,
                message: "4cool",
                userId: 77,
                chatId: 2,
                createdAt: new Date('2024-08-10T19:00:00Z').getTime()
            },
            {
                id: 5,
                message: "5amz",
                userId: 1,
                chatId: 2,
                createdAt: new Date('2024-09-05T06:15:00Z').getTime()
            },
            {
                id: 6,
                message: "6wtf",
                userId: 77,
                chatId: 2,
                createdAt: new Date('2022-10-20T22:30:00Z').getTime()
            },
            {
                id: 7,
                message: "7It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                userId: 77,
                chatId: 2,
                createdAt: new Date('2024-11-20T22:30:00Z').getTime()
            },
            {
                id: 8,
                message: "8cool",
                userId: 77,
                chatId: 2,
                createdAt: new Date('2024-11-21T22:30:00Z').getTime()
            },
            {
                id: 9,
                message: "9It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                userId: 1,
                chatId: 2,
                createdAt: new Date('2024-12-27T22:30:00Z').getTime()
            },
            {
                id: 10,
                message: "10cool",
                userId: 77,
                chatId: 2,
                createdAt: new Date('2024-12-20T22:30:00Z').getTime()
            },
            {
                id: 11,
                message: "11cool",
                userId: 77,
                chatId: 2,
                createdAt: new Date('2024-12-29T22:30:00Z').getTime()
            },
            {
                id: 12,
                message: "lastest",
                userId: 1,
                chatId: 2,
                createdAt: new Date('2024-12-31T22:30:00Z').getTime()
            },
        ] as MessageType[]
    },
    reducers: {

    }
})

export const messagesReducer = messagesSlice.reducer;