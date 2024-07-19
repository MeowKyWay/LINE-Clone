import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { createMessage } from "../../graphql/mutations";
import { fetchAuthSession } from "aws-amplify/auth";
import { Message } from "../../API";

const client = generateClient();

export const newMessage = createAsyncThunk('newMessage', async ({ userID, friendID, content }: {
    userID: string,
    friendID: string,
    content: string
}) => {
    const authSession = await fetchAuthSession();

    console.log(userID + ":" + friendID, content);

    try {
        const response = await client.graphql({
            query: createMessage,
            variables: {
                input: {
                    chatID: userID + ':' + friendID,
                    content: content
                }
            },
            authMode: 'lambda',
            authToken: "token:" + authSession.tokens?.accessToken.toString(),
        })
        return response.data.createMessage as Message;
    } catch (error) {
        return error.data.createMessage;
    }

})