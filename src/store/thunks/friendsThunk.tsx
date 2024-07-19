import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { listFriend, listFriendRequest } from "../../graphql/customQueries";
import { invokeLambda } from "../../utilities/LambdaUtils";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { getUser } from "../../graphql/queries";
import { User, UserFriend } from "../../API";
import { updateUserFriend } from "../../graphql/mutations";
import { getUserFriend } from "../../graphql/queries";

const client = generateClient();

const fetchFriendRequests = createAsyncThunk('fetchFriendRequests', async () => {
    try {
        const response = await client.graphql({
            query: listFriendRequest,
            variables: {
                filter: {
                    friendID: {
                        eq: (await getCurrentUser()).username,
                    },
                    status: {
                        eq: "pending"
                    }
                }
            }
        })
        // console.log("response: ", response);
        return response.data.listUserFriends.items.map((item) => item.user) as User[];
    } catch (err) {
        console.log(err);
    }

})

const fetchFavoriteFriends = createAsyncThunk('fetchFavoriteFriends', async () => {

    const userID = (await getCurrentUser()).username;
    const response = await client.graphql({
        query: listFriend,
        variables: {
            filter: {
                userID: {
                    eq: userID
                },
                favorite: { 
                    eq: true
                }
            }
        }
<<<<<<< HEAD
    })    
    return response.data.listUserFriends.items.map((item) => item.friend) as User[]
=======
    })
    console.log("response: ", response);

    return response.data.listUserFriends.items.map((item) => item.user) as User[];
>>>>>>> 447b014e63b7bff1f0efd6f244ed56a7237be765
})

const addFriend = createAsyncThunk('addFriend', async (friendID: string, { rejectWithValue }) => {
    console.log("friendID: ", friendID);
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
    // console.log("friend: ", friend);

    return friend as User;
})



const fetchUserFriends = createAsyncThunk('userFriends/fetch', async () => {
    const response = await client.graphql({
        query: listFriend,
        variables: {
            filter: {
                userID: {
                    eq: (await getCurrentUser()).username,
                },
                favorite: {
                    ne: true
                }
            }
        }
    })

    return response.data.listUserFriends.items.map((item) => item.friend) as User[];
})


const updateFavoriteFriend = createAsyncThunk('userFriends/updateFavorite', async (userFriend : UserFriend) => {
    const defaultState = userFriend.favorite ?? false;  
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

const fetchUserFriend = createAsyncThunk('userFriends/getUserFriend', async (userFriendID: string) => {
    const response = await client.graphql({
        query: getUserFriend,
        variables: {
            id: userFriendID
        }
    })

    const userFriend = response.data.getUserFriend;

    return userFriend;
})

<<<<<<< HEAD
export { 
    fetchFriendRequests as fetchFriendRequest, 
    addFriend, 
=======
// const subscriptionFriendRequest = createAsyncThunk('subFriendRequest/update', async () => {

// })

export {
    fetchFriendRequests as fetchFriendRequest,
    addFriend,
>>>>>>> 447b014e63b7bff1f0efd6f244ed56a7237be765
    fetchUserFriends,
    fetchUserFriend,
    updateFavoriteFriend,
    fetchFavoriteFriends
}