import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { getUser } from "../../graphql/queries";
import { User } from "../../API";


const client = generateClient();

const fetchUser = createAsyncThunk('users/fetch', async (userId: string) => {
    const response = client.graphql({
        query: getUser,
        variables: {
            id: userId
        }
    })

    return (await response).data.getUser as User
})

export { fetchUser }