import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { getUser } from "../../graphql/queries";
import { UserType } from "../slice/userSlice";
import { fetchUserAttributes, getCurrentUser, signOut } from "aws-amplify/auth";

const client = generateClient();

const fetchUser = createAsyncThunk('users/fetch', async () => {

    const username = (await getCurrentUser()).username;
    const userAttribute = (await fetchUserAttributes());

    try {
        const response = await client.graphql({
            query: getUser,
            variables: {
                id: username
            }
        })
        const user = response.data.getUser;

        console.log(username);
        console.log(user);
        console.log(userAttribute);

        return {
            name: user?.name,
            email: userAttribute.email,
            lineID: user?.id,
            statusMessage: user?.statusMessage,
        } as UserType;
    } catch (error) {
        console.log(error);
    }





})

const logout = createAsyncThunk('users/logout', async () => {
    await signOut();
    return "Logged out successfully";
})

export { fetchUser, logout }