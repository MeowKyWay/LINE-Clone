import { ModelUserFriendFilterInput } from "./API";

export type ListUserFriendRequestsQueryVariables = {
    filter?: ModelUserFriendFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
};

export type ListUserFriendRequestsQuery = {
    listUserFriends?: {
        __typename: "ModelUserFriendConnection",
        items: Array<{
            __typename: "UserFriend",
            id: string,
            userID: string,
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