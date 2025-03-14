import { ModelChatFilterInput, ModelUserFriendFilterInput } from "./API";

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
                image: string,
                coverImage: string,
            } | null,
            friendID: string,
            friend: {
                __typename: "User",
                id: string,
                name: string,
                statusMessage: string,
                image: string,
                coverImage: string,
            } | null,
            status: string,
            favorite: boolean,
            createdAt: string,
            updatedAt: string,
        } | null>,
        nextToken?: string | null,
    } | null,
};

export type ListFriendRequestQueryVariables = {
    filter?: ModelUserFriendFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
};

export type ListFriendRequestQuery = {
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
                image: string,
                coverImage: string,
            } | null,
            friendID: string,
            friend: {
                __typename: "User",
                id: string,
                name: string,
                statusMessage: string,
                image: string,
                coverImage: string,
            } | null,
            status: string,
            createdAt: string,
            updatedAt: string,
        } | null>,
        nextToken?: string | null,
    } | null,
};

export type ListMyChatsQueryVariables = {
    filter?: ModelChatFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
};

export type ListMyChatsQuery = {
    listChats?: {
        __typename: "ModelChatConnection",
        items: Array<{
            __typename: "Chat",
            id: string,
            userID: string,
            user: null,
            friendID: string,
            friend: {
                __typename: "User",
                id: string,
                name: string,
                statusMessage: string,
                image: string
                createdAt: string,
                updatedAt: string,
            },
            lastReadTime: string,
            message: {
                __typename: "ModelMessageConnection",
                items: {
                    __typename: "Message",
                    id: string,
                    chatID: string,
                    userID: string,
                    friendID: string,
                    content: string,
                    createdAt: string,
                    updatedAt: string,
                }[] | null
            },
            createdAt: string,
            updatedAt: string,
        } | null>,
        nextToken?: string | null,
    } | null,
};