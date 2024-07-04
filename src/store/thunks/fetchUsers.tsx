import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { listUsers } from "../../graphql/queries";

const client = generateClient();

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = client.graphql({
        query: listUsers
    })

    return (await response).data.listUsers.items
})

export { fetchUsers}