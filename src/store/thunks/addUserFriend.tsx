import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { createUserFriend } from "../../graphql/mutations";

const client = generateClient()

const addUserFriend = createAsyncThunk('userFriends/add' , async (user , friend) => {
    const response = await client.graphql({
        query: createUserFriend,
        variables: {
            input: {
                userID: user.id,
                friendID: friend.id
            }
        }

    })
    return response.data.createUserFriend
})

export { addUserFriend }