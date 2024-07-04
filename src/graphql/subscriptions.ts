/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateUserFriend = /* GraphQL */ `subscription OnCreateUserFriend(
  $filter: ModelSubscriptionUserFriendFilterInput
) {
  onCreateUserFriend(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserFriendSubscriptionVariables,
  APITypes.OnDeleteUserFriendSubscription
>;
