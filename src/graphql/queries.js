/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      statusMessage
      friends {
        nextToken
        __typename
      }
      friendOf {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        statusMessage
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserFriend = /* GraphQL */ `
  query GetUserFriend($id: ID!) {
    getUserFriend(id: $id) {
      id
      userID
      user {
        id
        name
        statusMessage
        createdAt
        updatedAt
        __typename
      }
      friendID
      friend {
        id
        name
        statusMessage
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
`;
export const listUserFriends = /* GraphQL */ `
  query ListUserFriends(
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
`;
export const userFriendsByUserID = /* GraphQL */ `
  query UserFriendsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFriendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFriendsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
`;
export const userFriendsByFriendID = /* GraphQL */ `
  query UserFriendsByFriendID(
    $friendID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFriendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFriendsByFriendID(
      friendID: $friendID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
`;
