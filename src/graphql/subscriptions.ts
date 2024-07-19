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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateUserFriend = /* GraphQL */ `subscription OnCreateUserFriend(
  $filter: ModelSubscriptionUserFriendFilterInput
  $userID: String
  $friendID: String
) {
  onCreateUserFriend(filter: $filter, userID: $userID, friendID: $friendID) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserFriendSubscriptionVariables,
  APITypes.OnCreateUserFriendSubscription
>;
export const onUpdateUserFriend = /* GraphQL */ `subscription OnUpdateUserFriend(
  $filter: ModelSubscriptionUserFriendFilterInput
  $userID: String
  $friendID: String
) {
  onUpdateUserFriend(filter: $filter, userID: $userID, friendID: $friendID) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserFriendSubscriptionVariables,
  APITypes.OnUpdateUserFriendSubscription
>;
export const onDeleteUserFriend = /* GraphQL */ `subscription OnDeleteUserFriend(
  $filter: ModelSubscriptionUserFriendFilterInput
  $userID: String
  $friendID: String
) {
  onDeleteUserFriend(filter: $filter, userID: $userID, friendID: $friendID) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserFriendSubscriptionVariables,
  APITypes.OnDeleteUserFriendSubscription
>;
export const onCreateChat = /* GraphQL */ `subscription OnCreateChat(
  $filter: ModelSubscriptionChatFilterInput
  $userID: String
  $friendID: String
) {
  onCreateChat(filter: $filter, userID: $userID, friendID: $friendID) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChatSubscriptionVariables,
  APITypes.OnCreateChatSubscription
>;
export const onUpdateChat = /* GraphQL */ `subscription OnUpdateChat(
  $filter: ModelSubscriptionChatFilterInput
  $userID: String
  $friendID: String
) {
  onUpdateChat(filter: $filter, userID: $userID, friendID: $friendID) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChatSubscriptionVariables,
  APITypes.OnUpdateChatSubscription
>;
export const onDeleteChat = /* GraphQL */ `subscription OnDeleteChat(
  $filter: ModelSubscriptionChatFilterInput
  $userID: String
  $friendID: String
) {
  onDeleteChat(filter: $filter, userID: $userID, friendID: $friendID) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChatSubscriptionVariables,
  APITypes.OnDeleteChatSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $userID: String
  $friendID: String
) {
  onCreateMessage(filter: $filter, userID: $userID, friendID: $friendID) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $userID: String
  $friendID: String
) {
  onUpdateMessage(filter: $filter, userID: $userID, friendID: $friendID) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $userID: String
  $friendID: String
) {
  onDeleteMessage(filter: $filter, userID: $userID, friendID: $friendID) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onCreateChatFolder = /* GraphQL */ `subscription OnCreateChatFolder(
  $filter: ModelSubscriptionChatFolderFilterInput
  $userID: String
) {
  onCreateChatFolder(filter: $filter, userID: $userID) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChatFolderSubscriptionVariables,
  APITypes.OnCreateChatFolderSubscription
>;
export const onUpdateChatFolder = /* GraphQL */ `subscription OnUpdateChatFolder(
  $filter: ModelSubscriptionChatFolderFilterInput
  $userID: String
) {
  onUpdateChatFolder(filter: $filter, userID: $userID) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChatFolderSubscriptionVariables,
  APITypes.OnUpdateChatFolderSubscription
>;
export const onDeleteChatFolder = /* GraphQL */ `subscription OnDeleteChatFolder(
  $filter: ModelSubscriptionChatFolderFilterInput
  $userID: String
) {
  onDeleteChatFolder(filter: $filter, userID: $userID) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChatFolderSubscriptionVariables,
  APITypes.OnDeleteChatFolderSubscription
>;
export const onCreateFolderChat = /* GraphQL */ `subscription OnCreateFolderChat(
  $filter: ModelSubscriptionFolderChatFilterInput
  $userID: String
) {
  onCreateFolderChat(filter: $filter, userID: $userID) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFolderChatSubscriptionVariables,
  APITypes.OnCreateFolderChatSubscription
>;
export const onUpdateFolderChat = /* GraphQL */ `subscription OnUpdateFolderChat(
  $filter: ModelSubscriptionFolderChatFilterInput
  $userID: String
) {
  onUpdateFolderChat(filter: $filter, userID: $userID) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFolderChatSubscriptionVariables,
  APITypes.OnUpdateFolderChatSubscription
>;
export const onDeleteFolderChat = /* GraphQL */ `subscription OnDeleteFolderChat(
  $filter: ModelSubscriptionFolderChatFilterInput
  $userID: String
) {
  onDeleteFolderChat(filter: $filter, userID: $userID) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFolderChatSubscriptionVariables,
  APITypes.OnDeleteFolderChatSubscription
>;
