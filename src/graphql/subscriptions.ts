/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUserFriend = /* GraphQL */ `subscription OnCreateUserFriend(
  $filter: ModelSubscriptionUserFriendFilterInput
) {
  onCreateUserFriend(filter: $filter) {
    id
    userID
    friendID
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
    userID
    friendID
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
    userID
    friendID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserFriendSubscriptionVariables,
  APITypes.OnDeleteUserFriendSubscription
>;
