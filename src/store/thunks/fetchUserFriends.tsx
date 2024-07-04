import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { listUserFriends } from "../../graphql/queries";

const client = generateClient();

const fetchUserFriends = createAsyncThunk('userFriends/fetch', async () => {
    const response = await client.graphql({
        query: listUserFriends
    })

    return  response.data.listUserFriends.items
})

export { fetchUserFriends}