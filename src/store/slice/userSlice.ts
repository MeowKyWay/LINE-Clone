import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ArrayUtils from "../../utilities/ArrayUtils";

export interface ChatFolderType {
    name: string;
    chatID: number[];
}

export interface UserType {
    id: number;
    name: string;
    email: string;
    lineID: string;
    statusMessage: string;
    profilePicture: string;
    chatFolders: ChatFolderType[];
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: {
            id: 1,
            name: 'Cat',
            email: 'test@test.com',
            lineID: 'user1',
            statusMessage: 'Cat',
            profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOMFqYvzSSet_VOKrJgE_9RZ2IJrOSX77FtMhzNRZ-Wg&s',
            chatFolders: [
                {
                    name: 'Close Friend',
                    chatID: [1, 3],
                },
                {
                    name: 'Work',
                    chatID: [2, 4],
                },
            ]
        } as UserType,
    },
    reducers: {
        newChatFolder(state, action: PayloadAction<ChatFolderType>) {
            state.currentUser.chatFolders.push(action.payload)
        },
        removeChatFolder(state, action: PayloadAction<string>) {
            const name = action.payload;
            state.currentUser.chatFolders = ArrayUtils.removeByName(state.currentUser.chatFolders, name);
        },
    }
})

export const { newChatFolder, removeChatFolder } = userSlice.actions;
export const userReducer = userSlice.reducer;