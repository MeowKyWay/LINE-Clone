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
      createdAt
      updatedAt
      __typename
    }
    status
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
      createdAt
      updatedAt
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
