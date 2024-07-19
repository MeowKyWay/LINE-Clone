import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAuthSession } from "aws-amplify/auth";
import { invokeLambda, LambdaARN } from "../../utilities/LambdaUtils";

export const newMessage = createAsyncThunk('newMessage', async ({ friendID, content }: {
    friendID: string,
    content: string
}) => {
    const authSession = await fetchAuthSession();

    // console.log(userID + ":" + friendID, content);

    try {
        const response = await invokeLambda({
            arn: LambdaARN.SEND_MESSAGE,
            body: {
                accessToken: authSession.tokens?.accessToken.toString(),
                friendID,
                content,
            }
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
})