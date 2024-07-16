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
        image: user?.image,
        coverImage: user?.coverImage,
    } as UserType;
})

const logout = createAsyncThunk('users/logout', async () => {
    await signOut();
    return "Logged out successfully";
})

const setProfileUser = createAsyncThunk('users/setImg', async (filename: string) => {
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

const setCoverImageUser = createAsyncThunk('users/setImg', async (filename: string) => {
    const username = (await getCurrentUser()).username;
    
    try{
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
    catch(error){
        console.log(error);
        throw error
    }
})

const setStatusMessage = createAsyncThunk('users/setStatusMessage', async (message: string) => {
    const username = (await getCurrentUser()).username;

    try {
        await client.graphql({
            query: updateUser,
            variables: {
                input: {
                    id: username,
                    statusMessage: message
                }
            }
        })
        return message;
    }
    catch (error) {
        console.log(error);
        throw error
    }
})


const changeUserName = createAsyncThunk('users/changeUserName', async (newName: string) => {
    const username = (await getCurrentUser()).username;

    try{
        await client.graphql({
            query: updateUser,
            variables: {
                input: {
                    id: username,
                    name: newName
                }
            }
        })
        return newName;
    }
    catch(error){
        console.log(error);
        throw error;
        
    }
})

export { fetchUser, logout , setProfileUser, setCoverImageUser , setStatusMessage , changeUserName}
