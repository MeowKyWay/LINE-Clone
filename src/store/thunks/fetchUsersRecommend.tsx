import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { listUsers } from "../../graphql/queries";
import { User } from "../../API";


const client = generateClient();

const fetchUsersRecommend = createAsyncThunk('usersRecommend/fetch', async (userId : string) => {
    const response = await client.graphql({
        query: listUsers,
        variables: {
            filter: {
                id:{
                    ne: userId
                }
            }
        }
    })

    return response.data.listUsers.items as User[]
})

export { fetchUsersRecommend }