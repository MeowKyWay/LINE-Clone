/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createUserFriend = /* GraphQL */ `mutation CreateUserFriend(
  $input: CreateUserFriendInput!
  $condition: ModelUserFriendConditionInput
) {
  createUserFriend(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserFriendMutationVariables,
  APITypes.CreateUserFriendMutation
>;
export const updateUserFriend = /* GraphQL */ `mutation UpdateUserFriend(
  $input: UpdateUserFriendInput!
  $condition: ModelUserFriendConditionInput
) {
  updateUserFriend(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserFriendMutationVariables,
  APITypes.UpdateUserFriendMutation
>;
export const deleteUserFriend = /* GraphQL */ `mutation DeleteUserFriend(
  $input: DeleteUserFriendInput!
  $condition: ModelUserFriendConditionInput
) {
  deleteUserFriend(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserFriendMutationVariables,
  APITypes.DeleteUserFriendMutation
>;
