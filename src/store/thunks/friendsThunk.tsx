import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { listUserFriendRequests } from "../../graphql/customQueries";


const client = generateClient();

const fetchFriendRequest = createAsyncThunk('usersRecommend/fetch', async (userID : string) => {
    const response = await client.graphql({
        query: listUserFriendRequests,
        variables: {
            filter: {
                friendID: {
                    eq: userID
                },
                status: {
                    eq: "pending"
                }
            }
        }
    })

    return response.data.listUserFriends.items
})

export { fetchFriendRequest }