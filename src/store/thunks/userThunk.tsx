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
    try{
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
        image: user?.image,
        coverImage: user?.coverImage,
    } as UserType;
    }
    catch(error){
        console.log(error);
        
    }
})


const logout = createAsyncThunk('users/logout', async () => {
    await signOut();
    return "Logged out successfully";
})

const uploadUserProfileImage = createAsyncThunk('uploadProfileImage', async (filename: string) => {
    const username = (await getCurrentUser()).username;

    try {
        await client.graphql({
            query: updateUser,
            variables: {
                input: {
                    id: username,
                    image: filename
                }
            }
        })
        return filename;
    }
    catch (error) {
        console.log(error);
        throw error
    }
})

const uploadUserCoverImage = createAsyncThunk('uploadCoverImage', async (filename: string) => {
    const username = (await getCurrentUser()).username;

    try {
        await client.graphql({
            query: updateUser,
            variables: {
                input: {
                    id: username,
                    coverImage: filename
                }
            }
        })
        return filename;
    }
    catch (error) {
        console.log(error);
        throw error
    }
})

const updateUserProfile = createAsyncThunk('users/updateProfile', async ({name, statusMessage}: {
    name: string,
    statusMessage: string
}) => {
    const username = (await getCurrentUser()).username;

    try {
        await client.graphql({
            query: updateUser,
            variables: {
                input: {
                    id: username,
                    name: name,
                    statusMessage: statusMessage
                }
            }
        })
        return {
            name,
            statusMessage
        }
    }
    catch (error) {
        console.log(error);
        throw error
    }
})


export { fetchUser, logout, uploadUserProfileImage, uploadUserCoverImage, updateUserProfile }   

