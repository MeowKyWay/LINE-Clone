import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { getUser } from "../../graphql/queries";
import { fetchUserAttributes } from "aws-amplify/auth";
import { UserType } from "../slice/userSlice";

const client = generateClient();

const fetchUser = createAsyncThunk('users/fetch', async (userId: string) => {
    const response = await client.graphql({
        query: getUser,
        variables: {
            id: userId
        }
    })

    const user = response.data.getUser;
    const userAttribute = (await fetchUserAttributes());

    return {
        name: user?.name,
        email: userAttribute.email,
        lineID: user?.id,
        statusMessage: user?.statusMessage,
    } as UserType;
})

export { fetchUser }