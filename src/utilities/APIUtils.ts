import { generateClient } from "aws-amplify/api";
import { getUser } from "../graphql/queries";
import { User } from "../API";

const client = generateClient()

export async function searchUserByUsername(username: string) {
    const user = (await client.graphql({
        query: getUser,
        variables: {
            id: username
        }
    })).data.getUser

    return user as User;
}