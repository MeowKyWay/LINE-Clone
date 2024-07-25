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
` as GeneratedMutation<
  APITypes.DeleteUserFriendMutationVariables,
  APITypes.DeleteUserFriendMutation
>;
export const createChat = /* GraphQL */ `mutation CreateChat(
  $input: CreateChatInput!
  $condition: ModelChatConditionInput
) {
  createChat(input: $input, condition: $condition) {
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
    lastReadTime
    message {
      nextToken
      __typename
    }
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
    lastReadTime
    message {
      nextToken
      __typename
    }
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
    lastReadTime
    message {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChatMutationVariables,
  APITypes.DeleteChatMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    id
    userID
    friendID
    content
    chatID
    chat {
      id
      userID
      friendID
      lastReadTime
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
    id
    userID
    friendID
    content
    chatID
    chat {
      id
      userID
      friendID
      lastReadTime
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
    id
    userID
    friendID
    content
    chatID
    chat {
      id
      userID
      friendID
      lastReadTime
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
