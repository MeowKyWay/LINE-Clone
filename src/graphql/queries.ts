/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUserFriend = /* GraphQL */ `query GetUserFriend($id: ID!) {
  getUserFriend(id: $id) {
    id
    userID
    friendID
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
