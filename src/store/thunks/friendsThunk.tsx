import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { listFriend } from "../../graphql/customQueries";
import { LambdaARN, invokeLambda } from "../../utilities/LambdaUtil";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { getUser } from "../../graphql/queries";
import { User } from "../../API";

const client = generateClient();

const fetchFriendRequest = createAsyncThunk('fetchFriendRequest', async (userID: string) => {
    const response = await client.graphql({
        query: listFriend,
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

    return response.data.listUserFriends.items.map((item) => item.user) as User[];
})

const addFriend = createAsyncThunk('addFriend', async (friendID: string) => {
    await invokeLambda({
        arn: LambdaARN.ADD_FRIEND,
        body: {
            accessToken: (await fetchAuthSession()).tokens?.accessToken.toString(),
            friendID,
        }
    })
    const friend = (await client.graphql({
        query: getUser,
        variables: {
            id: friendID,
        }
    })).data.getUser;

    return friend as User;
})

const fetchUserFriends = createAsyncThunk('userFriends/fetch', async () => {
    const response = await client.graphql({
        query: listFriend,
        variables: {
            filter: {
                userID: {
                    eq: (await getCurrentUser()).username,
                }
            }
        }
    })

    return response.data.listUserFriends.items.map((item) => item.friend) as User[];
})

export { 
    fetchFriendRequest, 
    addFriend, 
    fetchUserFriends 
}