/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ModelUserFriendFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  friendID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFriendFilterInput | null > | null,
  or?: Array< ModelUserFriendFilterInput | null > | null,
  not?: ModelUserFriendFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserFriendConnection = {
  __typename: "ModelUserFriendConnection",
  items:  Array<UserFriend | null >,
  nextToken?: string | null,
};

export type UserFriend = {
  __typename: "UserFriend",
  id: string,
  userID: string,
  user?: User | null,
  friendID: string,
  friend?: User | null,
  status: string,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  statusMessage: string,
  image?: string | null,
  coverImage?: string | null,
  friends?: ModelUserFriendConnection | null,
  friendOf?: ModelUserFriendConnection | null,
  chats?: ModelChatConnection | null,
  chatWith?: ModelChatConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelChatConnection = {
  __typename: "ModelChatConnection",
  items:  Array<Chat | null >,
  nextToken?: string | null,
};

export type Chat = {
  __typename: "Chat",
  id: string,
  userID: string,
  user?: User | null,
  friendID: string,
  friend?: User | null,
  message?: ModelMessageConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  content: string,
  chatID: string,
  chat?: Chat | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelChatFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  friendID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChatFilterInput | null > | null,
  or?: Array< ModelChatFilterInput | null > | null,
  not?: ModelChatFilterInput | null,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  statusMessage: string,
  image?: string | null,
  coverImage?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  statusMessage?: ModelStringInput | null,
  image?: ModelStringInput | null,
  coverImage?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  id?: ModelStringInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  statusMessage?: string | null,
  image?: string | null,
  coverImage?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateUserFriendInput = {
  id?: string | null,
  userID: string,
  friendID: string,
  status: string,
};

export type ModelUserFriendConditionInput = {
  userID?: ModelIDInput | null,
  friendID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserFriendConditionInput | null > | null,
  or?: Array< ModelUserFriendConditionInput | null > | null,
  not?: ModelUserFriendConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateUserFriendInput = {
  id: string,
  userID?: string | null,
  friendID?: string | null,
  status?: string | null,
};

export type DeleteUserFriendInput = {
  id: string,
};

export type CreateChatInput = {
  id?: string | null,
  userID: string,
  friendID: string,
};

export type ModelChatConditionInput = {
  userID?: ModelIDInput | null,
  friendID?: ModelIDInput | null,
  and?: Array< ModelChatConditionInput | null > | null,
  or?: Array< ModelChatConditionInput | null > | null,
  not?: ModelChatConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateChatInput = {
  id: string,
  userID?: string | null,
  friendID?: string | null,
};

export type DeleteChatInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  content: string,
  chatID: string,
};

export type ModelMessageConditionInput = {
  content?: ModelStringInput | null,
  chatID?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateMessageInput = {
  id: string,
  content?: string | null,
  chatID?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  statusMessage?: ModelStringInput | null,
  image?: ModelStringInput | null,
  coverImage?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  chatID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  statusMessage?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  coverImage?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  id?: ModelStringInput | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFriendFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  friendID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFriendFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFriendFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionChatFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChatFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatFilterInput | null > | null,
  userID?: ModelStringInput | null,
  friendID?: ModelStringInput | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  chatID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type ListFriendsQueryVariables = {
  filter?: ModelUserFriendFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFriendsQuery = {
  listUserFriends?:  {
    __typename: "ModelUserFriendConnection",
    items:  Array< {
      __typename: "UserFriend",
      id: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        statusMessage: string,
        image?: string | null,
      } | null,
      friendID: string,
      friend?:  {
        __typename: "User",
        id: string,
        name: string,
        statusMessage: string,
        image?: string | null,
      } | null,
      status: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMyChatsQueryVariables = {
  filter?: ModelChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMyChatsQuery = {
  listChats?:  {
    __typename: "ModelChatConnection",
    items:  Array< {
      __typename: "Chat",
      id: string,
      userID: string,
      friendID: string,
      friend?:  {
        __typename: "User",
        id: string,
        name: string,
        statusMessage: string,
        image?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    statusMessage: string,
    image?: string | null,
    coverImage?: string | null,
    friends?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    friendOf?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    chatWith?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    statusMessage: string,
    image?: string | null,
    coverImage?: string | null,
    friends?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    friendOf?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    chatWith?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    statusMessage: string,
    image?: string | null,
    coverImage?: string | null,
    friends?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    friendOf?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    chatWith?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserFriendMutationVariables = {
  input: CreateUserFriendInput,
  condition?: ModelUserFriendConditionInput | null,
};

export type CreateUserFriendMutation = {
  createUserFriend?:  {
    __typename: "UserFriend",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserFriendMutationVariables = {
  input: UpdateUserFriendInput,
  condition?: ModelUserFriendConditionInput | null,
};

export type UpdateUserFriendMutation = {
  updateUserFriend?:  {
    __typename: "UserFriend",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserFriendMutationVariables = {
  input: DeleteUserFriendInput,
  condition?: ModelUserFriendConditionInput | null,
};

export type DeleteUserFriendMutation = {
  deleteUserFriend?:  {
    __typename: "UserFriend",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatMutationVariables = {
  input: CreateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type CreateChatMutation = {
  createChat?:  {
    __typename: "Chat",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatMutationVariables = {
  input: UpdateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type UpdateChatMutation = {
  updateChat?:  {
    __typename: "Chat",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatMutationVariables = {
  input: DeleteChatInput,
  condition?: ModelChatConditionInput | null,
};

export type DeleteChatMutation = {
  deleteChat?:  {
    __typename: "Chat",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chatID: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      userID: string,
      friendID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chatID: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      userID: string,
      friendID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chatID: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      userID: string,
      friendID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    statusMessage: string,
    image?: string | null,
    coverImage?: string | null,
    friends?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    friendOf?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    chatWith?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserFriendQueryVariables = {
  id: string,
};

export type GetUserFriendQuery = {
  getUserFriend?:  {
    __typename: "UserFriend",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserFriendsQueryVariables = {
  filter?: ModelUserFriendFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserFriendsQuery = {
  listUserFriends?:  {
    __typename: "ModelUserFriendConnection",
    items:  Array< {
      __typename: "UserFriend",
      id: string,
      userID: string,
      friendID: string,
      status: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatQueryVariables = {
  id: string,
};

export type GetChatQuery = {
  getChat?:  {
    __typename: "Chat",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatsQueryVariables = {
  filter?: ModelChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatsQuery = {
  listChats?:  {
    __typename: "ModelChatConnection",
    items:  Array< {
      __typename: "Chat",
      id: string,
      userID: string,
      friendID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chatID: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      userID: string,
      friendID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      chatID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    statusMessage: string,
    image?: string | null,
    coverImage?: string | null,
    friends?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    friendOf?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    chatWith?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    statusMessage: string,
    image?: string | null,
    coverImage?: string | null,
    friends?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    friendOf?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    chatWith?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    statusMessage: string,
    image?: string | null,
    coverImage?: string | null,
    friends?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    friendOf?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    chatWith?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserFriendSubscriptionVariables = {
  filter?: ModelSubscriptionUserFriendFilterInput | null,
};

export type OnCreateUserFriendSubscription = {
  onCreateUserFriend?:  {
    __typename: "UserFriend",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserFriendSubscriptionVariables = {
  filter?: ModelSubscriptionUserFriendFilterInput | null,
};

export type OnUpdateUserFriendSubscription = {
  onUpdateUserFriend?:  {
    __typename: "UserFriend",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserFriendSubscriptionVariables = {
  filter?: ModelSubscriptionUserFriendFilterInput | null,
};

export type OnDeleteUserFriendSubscription = {
  onDeleteUserFriend?:  {
    __typename: "UserFriend",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
  userID?: string | null,
  friendID?: string | null,
};

export type OnCreateChatSubscription = {
  onCreateChat?:  {
    __typename: "Chat",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
  userID?: string | null,
  friendID?: string | null,
};

export type OnUpdateChatSubscription = {
  onUpdateChat?:  {
    __typename: "Chat",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
  userID?: string | null,
  friendID?: string | null,
};

export type OnDeleteChatSubscription = {
  onDeleteChat?:  {
    __typename: "Chat",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      image?: string | null,
      coverImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chatID: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      userID: string,
      friendID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chatID: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      userID: string,
      friendID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chatID: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      userID: string,
      friendID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
