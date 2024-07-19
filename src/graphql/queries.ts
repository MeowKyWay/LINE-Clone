/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    statusMessage
    image
    coverImage
    friends {
      nextToken
      __typename
    }
    friendOf {
      nextToken
      __typename
    }
    chats {
      nextToken
      __typename
    }
    chatWith {
      nextToken
      __typename
    }
    chatFolder {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      statusMessage
      image
      coverImage
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getUserFriend = /* GraphQL */ `query GetUserFriend($id: ID!) {
  getUserFriend(id: $id) {
    id
    userID
    user {
      id
      name
      statusMessage
      image
      coverImage
      createdAt
      updatedAt
      __typename
    }
    friendID
    friend {
      id
      name
      statusMessage
      image
      coverImage
      createdAt
      updatedAt
      __typename
    }
    status
    favorite
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserFriendQueryVariables,
  APITypes.GetUserFriendQuery
>;
export const listUserFriends = /* GraphQL */ `query ListUserFriends(
  $filter: ModelUserFriendFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      friendID
      status
      favorite
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserFriendsQueryVariables,
  APITypes.ListUserFriendsQuery
>;
export const getChat = /* GraphQL */ `query GetChat($id: ID!) {
  getChat(id: $id) {
    id
    userID
    user {
      id
      name
      statusMessage
      image
      coverImage
      createdAt
      updatedAt
      __typename
    }
    friendID
    friend {
      id
      name
      statusMessage
      image
      coverImage
      createdAt
      updatedAt
      __typename
    }
    message {
      nextToken
      __typename
    }
    chatFolders {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetChatQueryVariables, APITypes.GetChatQuery>;
export const listChats = /* GraphQL */ `query ListChats(
  $filter: ModelChatFilterInput
  $limit: Int
  $nextToken: String
) {
  listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      friendID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListChatsQueryVariables, APITypes.ListChatsQuery>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    content
    userID
    friendID
    chatID
    chat {
      id
      userID
      friendID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      userID
      friendID
      chatID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const messagesByChatID = /* GraphQL */ `query MessagesByChatID(
  $chatID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesByChatID(
    chatID: $chatID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      userID
      friendID
      chatID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessagesByChatIDQueryVariables,
  APITypes.MessagesByChatIDQuery
>;
export const getChatFolder = /* GraphQL */ `query GetChatFolder($id: ID!) {
  getChatFolder(id: $id) {
    id
    name
    userID
    user {
      id
      name
      statusMessage
      image
      coverImage
      createdAt
      updatedAt
      __typename
    }
    chats {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetChatFolderQueryVariables,
  APITypes.GetChatFolderQuery
>;
export const listChatFolders = /* GraphQL */ `query ListChatFolders(
  $filter: ModelChatFolderFilterInput
  $limit: Int
  $nextToken: String
) {
  listChatFolders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChatFoldersQueryVariables,
  APITypes.ListChatFoldersQuery
>;
export const chatFoldersByUserID = /* GraphQL */ `query ChatFoldersByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelChatFolderFilterInput
  $limit: Int
  $nextToken: String
) {
  chatFoldersByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ChatFoldersByUserIDQueryVariables,
  APITypes.ChatFoldersByUserIDQuery
>;
export const getFolderChat = /* GraphQL */ `query GetFolderChat($id: ID!) {
  getFolderChat(id: $id) {
    id
    userID
    chatID
    chat {
      id
      userID
      friendID
      createdAt
      updatedAt
      __typename
    }
    chatFolderID
    chatFolder {
      id
      name
      userID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFolderChatQueryVariables,
  APITypes.GetFolderChatQuery
>;
export const listFolderChats = /* GraphQL */ `query ListFolderChats(
  $filter: ModelFolderChatFilterInput
  $limit: Int
  $nextToken: String
) {
  listFolderChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      chatID
      chatFolderID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFolderChatsQueryVariables,
  APITypes.ListFolderChatsQuery
>;
export const folderChatsByChatID = /* GraphQL */ `query FolderChatsByChatID(
  $chatID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFolderChatFilterInput
  $limit: Int
  $nextToken: String
) {
  folderChatsByChatID(
    chatID: $chatID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      chatID
      chatFolderID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FolderChatsByChatIDQueryVariables,
  APITypes.FolderChatsByChatIDQuery
>;
export const folderChatsByChatFolderID = /* GraphQL */ `query FolderChatsByChatFolderID(
  $chatFolderID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFolderChatFilterInput
  $limit: Int
  $nextToken: String
) {
  folderChatsByChatFolderID(
    chatFolderID: $chatFolderID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      chatID
      chatFolderID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FolderChatsByChatFolderIDQueryVariables,
  APITypes.FolderChatsByChatFolderIDQuery
>;
