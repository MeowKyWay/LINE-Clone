import { ModelUserFriendFilterInput } from "./API";

export type ListFriendQueryVariables = {
    filter?: ModelUserFriendFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
};

export type ListFriendQuery = {
    listUserFriends?: {
        __typename: "ModelUserFriendConnection",
        items: Array<{
            __typename: "UserFriend",
            id: string,
            userID: string,
            user: {
                __typename: "User",
                id: string,
                name: string,
                statusMessage: string,
            } | null,
            friendID: string,
            friend: {
                __typename: "User",
                id: string,
                name: string,
                statusMessage: string,
            } | null,
            status: string,
            createdAt: string,
            updatedAt: string,
        } | null>,
        nextToken?: string | null,
    } | null,
};