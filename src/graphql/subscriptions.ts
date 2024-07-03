/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateChat = /* GraphQL */ `subscription OnCreateChat($filter: ModelSubscriptionChatFilterInput) {
  onCreateChat(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateChatSubscriptionVariables,
  APITypes.OnCreateChatSubscription
>;
export const onUpdateChat = /* GraphQL */ `subscription OnUpdateChat($filter: ModelSubscriptionChatFilterInput) {
  onUpdateChat(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateChatSubscriptionVariables,
  APITypes.OnUpdateChatSubscription
>;
export const onDeleteChat = /* GraphQL */ `subscription OnDeleteChat($filter: ModelSubscriptionChatFilterInput) {
  onDeleteChat(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteChatSubscriptionVariables,
  APITypes.OnDeleteChatSubscription
>;
export const onCreateUserFriend = /* GraphQL */ `subscription OnCreateUserFriend(
  $filter: ModelSubscriptionUserFriendFilterInput
) {
  onCreateUserFriend(filter: $filter) {
    id
    friendID
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserFriendSubscriptionVariables,
  APITypes.OnCreateUserFriendSubscription
>;
export const onUpdateUserFriend = /* GraphQL */ `subscription OnUpdateUserFriend(
  $filter: ModelSubscriptionUserFriendFilterInput
) {
  onUpdateUserFriend(filter: $filter) {
    id
    friendID
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserFriendSubscriptionVariables,
  APITypes.OnUpdateUserFriendSubscription
>;
export const onDeleteUserFriend = /* GraphQL */ `subscription OnDeleteUserFriend(
  $filter: ModelSubscriptionUserFriendFilterInput
) {
  onDeleteUserFriend(filter: $filter) {
    id
    friendID
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserFriendSubscriptionVariables,
  APITypes.OnDeleteUserFriendSubscription
>;
