/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createChat = /* GraphQL */ `mutation CreateChat(
  $input: CreateChatInput!
  $condition: ModelChatConditionInput
) {
  createChat(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChatMutationVariables,
  APITypes.CreateChatMutation
>;
export const updateChat = /* GraphQL */ `mutation UpdateChat(
  $input: UpdateChatInput!
  $condition: ModelChatConditionInput
) {
  updateChat(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChatMutationVariables,
  APITypes.UpdateChatMutation
>;
export const deleteChat = /* GraphQL */ `mutation DeleteChat(
  $input: DeleteChatInput!
  $condition: ModelChatConditionInput
) {
  deleteChat(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChatMutationVariables,
  APITypes.DeleteChatMutation
>;
export const createUserFriend = /* GraphQL */ `mutation CreateUserFriend(
  $input: CreateUserFriendInput!
  $condition: ModelUserFriendConditionInput
) {
  createUserFriend(input: $input, condition: $condition) {
    id
    friendID
    userID
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
    friendID
    userID
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
    friendID
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserFriendMutationVariables,
  APITypes.DeleteUserFriendMutation
>;
