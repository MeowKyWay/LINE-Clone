import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { Chat } from "../../API";
import { listMyChats } from "../../graphql/customQueries";
import { invokeLambda, LambdaARN } from "../../utilities/LambdaUtils";
import { fetchAuthSession } from "aws-amplify/auth";

const client = generateClient();

export const fetchFriendChats = createAsyncThunk('fetchChats', async (userID: string, { rejectWithValue }) => {
    const chats = [];
    let response;
    response = await client.graphql({
        query: listMyChats,
        variables: {
            filter: {
                userID: {
                    eq: userID
                }
            }
        }
    });
    if (response.errors)
        return rejectWithValue(response.errors.map((error) => error.message).join(', ') as string);
    chats.push(...response.data.listChats.items);
    response = await client.graphql({
        query: listMyChats,
        variables: {
            filter: {
                friendID: {
                    eq: userID
                }
            }
        }
    });
    if (response.errors)
        return rejectWithValue(response.errors.map((error) => error.message).join(', ') as string);
    chats.push(...response.data.listChats.items);

    console.log(chats);

    return chats as Chat[];
})

export const newFriendChat = createAsyncThunk('newChat', async (friendID: string) => {
    await invokeLambda({
        arn: LambdaARN.NEW_CHAT,
        body: {
            accessToken: (await fetchAuthSession()).tokens?.accessToken.toString(),
            friendID: friendID
        }
    })
})