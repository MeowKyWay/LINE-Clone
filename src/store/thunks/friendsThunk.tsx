import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { listFriend } from "../../graphql/customQueries";
import { invokeLambda } from "../../utilities/LambdaUtils";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { getUser } from "../../graphql/queries";
import { User, UserFriend } from "../../API";
import { updateUserFriend } from "../../graphql/mutations";
import { getUserFriend } from "../../graphql/queries";

const client = generateClient();

const fetchFriendRequests = createAsyncThunk('fetchFriendRequests', async () => {
    const userID = (await getCurrentUser()).username;
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

const fetchFavoriteFriends = createAsyncThunk('fetchFriendRequests', async () => {
    const userID = (await getCurrentUser()).username;
    const response = await client.graphql({
        query: listFriend,
        variables: {
            filter: {
                friendID: {
                    eq: userID
                },
                favorite: {
                    eq: true
                }
            }
        }
    })
    console.log("response: ",response);
    
    return response.data.listUserFriends.items.map((item) => item.user) as User[];
})

const addFriend = createAsyncThunk('addFriend', async (friendID: string, { rejectWithValue }) => {
    const response = await invokeLambda({
        arn: 'LINECloneAddFriend-dev',
        body: {
            accessToken: (await fetchAuthSession()).tokens?.accessToken.toString(),
            friendID,
        }
    })
    if (response.status === "error") 
        return rejectWithValue(response.message);
    const friend = (await client.graphql({
        query: getUser, //Todo
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

const updateFavoriteFriend = createAsyncThunk('userFriends/updateFavorite', async (userFriend : UserFriend) => {
    let defaultState;
    if(userFriend.favorite === undefined){
        defaultState = false
    }
    else{
        defaultState = userFriend.favorite
    }

    const response = await client.graphql({
        query: updateUserFriend,
        variables: {
            input: {
                id: userFriend.id,
                favorite: !defaultState
            }
        }
    })

    return response;
})

const fetchUserFriend = createAsyncThunk('userFriends/getUserFriend', async (userFriendID : string) => {
    const response = await client.graphql({
        query: getUserFriend,
        variables: {
            id: userFriendID
        }
    })

    const userFriend =  response.data.getUserFriend;

    return userFriend;
})

// const subscriptionFriendRequest = createAsyncThunk('subFriendRequest/update', async () => {

// })

export { 
    fetchFriendRequests as fetchFriendRequest, 
    addFriend, 
    fetchUserFriends,
    fetchUserFriend,
    updateFavoriteFriend,
    fetchFavoriteFriends
}