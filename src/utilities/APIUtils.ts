import { generateClient } from "aws-amplify/api";
import { getUser, listChats } from "../graphql/queries";
import { User } from "../API";
import { fetchAuthSession } from "aws-amplify/auth";

const client = generateClient()

export async function graphqlLambdaClient() {
    const accessToken = 'Bearer:' + (await fetchAuthSession()).tokens?.accessToken.toString() as string;

    console.log(accessToken);
    const lambdaClient = generateClient(
        {
            authMode: 'lambda',
            authToken: accessToken,
        });

    return lambdaClient;
}

export async function searchUserByUsername(username: string) {
    const user = (await client.graphql({
        query: getUser,
        variables: {
            id: username
        }
    })).data.getUser

    return user as User;
}

export async function listUserChats() {
    try {
        const response = await (await graphqlLambdaClient()).graphql({
            query: listChats,
        })
        return response;
    } catch (error) {
        return error;
    }
}