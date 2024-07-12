import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { Chat } from "../../API";
import { listMyChats } from "../../graphql/customQueries";

const client = generateClient();

export const fetchFriendChats = createAsyncThunk('fetchChats', async (userID: string, { rejectWithValue }) => {
    const response = await client.graphql({
        query: listMyChats,
        variables: {
            filter: {
                userID: {
                    eq: userID
                }
            }
        }
    })
    if (response.errors) 
        return rejectWithValue(response.errors.map((error) => error.message).join(', ') as string);
    return response.data.listChats.items as Chat[];
})