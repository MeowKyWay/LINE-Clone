import { createSlice } from "@reduxjs/toolkit";

export interface GroupType {
    id: string;
    name: string;
    memberCount: number;
    image: string;
}

const groupsSlice = createSlice({
    name: 'groupList',
    initialState: {
        groups: [] as GroupType[]
    },
    reducers: {
    }
})

export const groupsReducer = groupsSlice.reducer;