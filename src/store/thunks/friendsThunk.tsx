import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { listFriend, listFriendRequests } from "../../graphql/customQueries";
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
            query: listFriendRequests,
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
            }
        }
    })

    const allFriends = response.data.listUserFriends.items.map((item) => item.friend) as User[];
    const favoriteFriends = response.data.listUserFriends.items.filter(
        friend => friend.favorite
    ).map(
        item => item.friend
    ) as User[];


    return {
        allFriends: allFriends,
        favoriteFriends: favoriteFriends
    }

})


const addFavoriteFriend = createAsyncThunk('addFavoriteFriend/updateFavorite', async (userFriend: UserFriend) => {
    try {
        const response = await client.graphql({
            query: updateUserFriend,
            variables: {
                input: {
                    id: userFriend.id,
                    favorite: true
                }
            }
        })

        return response.data.updateUserFriend.friendID;
    }
    catch (error) {
        return userFriend.friendID
    }
})

const removeFavoriteFriend = createAsyncThunk('removeFavoriteFriends/updateFavorite', async (userFriend: UserFriend) => {
    try {
        const response = await client.graphql({
            query: updateUserFriend,
            variables: {
                input: {
                    id: userFriend.id,
                    favorite: false
                }
            }
        })

        return response.data.updateUserFriend.friendID;
    }
    catch(error){
        return userFriend.friendID
    }
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


export {
    fetchFriendRequests as fetchFriendRequest,
    addFriend,
    fetchUserFriends,
    fetchUserFriend,
    addFavoriteFriend,
    removeFavoriteFriend
}