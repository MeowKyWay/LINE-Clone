import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { createUserFriend } from "../../graphql/mutations";

const client = generateClient();

const addUserFriend = createAsyncThunk('userFriends/add', async ({ userId, friendId }: { userId: string, friendId: string }) => {
    const response = await client.graphql({
        query: createUserFriend,
        variables: {
            input: {
                userID: userId,
                friendID: friendId
            }
        }
    });
    return response.data.createUserFriend;
});

export { addUserFriend };
