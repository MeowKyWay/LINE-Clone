import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { getUser } from "../../graphql/queries";
import { UserType } from "../slice/userSlice";
import { fetchUserAttributes, getCurrentUser, signOut } from "aws-amplify/auth";
import { updateUser } from "../../graphql/mutations";

const client = generateClient();

const fetchUser = createAsyncThunk('users/fetch', async () => {

    const username = (await getCurrentUser()).username;
    const userAttribute = (await fetchUserAttributes());

    const response = await client.graphql({
        query: getUser,
        variables: {
            id: username
        }
    })
    const user = response.data.getUser;


    return {
        name: user?.name,
        email: userAttribute.email,
        lineID: user?.id,
        statusMessage: user?.statusMessage,
    } as UserType;
})

const logout = createAsyncThunk('users/logout', async () => {
    await signOut();
    return "Logged out successfully";
})

const setProfileUser = createAsyncThunk('user/setImg', async (filename: string) => {
    const username = (await getCurrentUser()).username;
    await client.graphql({
        query: updateUser,
        variables: {
            input: {
                id: username,
                
            }
        }
    })
})

export { fetchUser, logout , setProfileUser}