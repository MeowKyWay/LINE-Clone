/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChatInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelChatConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelChatConditionInput | null > | null,
  or?: Array< ModelChatConditionInput | null > | null,
  not?: ModelChatConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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

export type Chat = {
  __typename: "Chat",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateChatInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteChatInput = {
  id: string,
};

export type CreateUserFriendInput = {
  id?: string | null,
  friendID: string,
  userID: string,
};

export type ModelUserFriendConditionInput = {
  friendID?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  and?: Array< ModelUserFriendConditionInput | null > | null,
  or?: Array< ModelUserFriendConditionInput | null > | null,
  not?: ModelUserFriendConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UserFriend = {
  __typename: "UserFriend",
  id: string,
  friendID: string,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserFriendInput = {
  id: string,
  friendID?: string | null,
  userID?: string | null,
};

export type DeleteUserFriendInput = {
  id: string,
};

export type ModelChatFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChatFilterInput | null > | null,
  or?: Array< ModelChatFilterInput | null > | null,
  not?: ModelChatFilterInput | null,
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

export type ModelChatConnection = {
  __typename: "ModelChatConnection",
  items:  Array<Chat | null >,
  nextToken?: string | null,
};

export type ModelUserFriendFilterInput = {
  id?: ModelIDInput | null,
  friendID?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFriendFilterInput | null > | null,
  or?: Array< ModelUserFriendFilterInput | null > | null,
  not?: ModelUserFriendFilterInput | null,
};

export type ModelUserFriendConnection = {
  __typename: "ModelUserFriendConnection",
  items:  Array<UserFriend | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionChatFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChatFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatFilterInput | null > | null,
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
  friendID?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFriendFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFriendFilterInput | null > | null,
};

export type CreateChatMutationVariables = {
  input: CreateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type CreateChatMutation = {
  createChat?:  {
    __typename: "Chat",
    id: string,
    name: string,
    description?: string | null,
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
    name: string,
    description?: string | null,
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
    name: string,
    description?: string | null,
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
    friendID: string,
    userID: string,
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
    friendID: string,
    userID: string,
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
    friendID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetChatQueryVariables = {
  id: string,
};

export type GetChatQuery = {
  getChat?:  {
    __typename: "Chat",
    id: string,
    name: string,
    description?: string | null,
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
      name: string,
      description?: string | null,
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
    friendID: string,
    userID: string,
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
      friendID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
};

export type OnCreateChatSubscription = {
  onCreateChat?:  {
    __typename: "Chat",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
};

export type OnUpdateChatSubscription = {
  onUpdateChat?:  {
    __typename: "Chat",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
};

export type OnDeleteChatSubscription = {
  onDeleteChat?:  {
    __typename: "Chat",
    id: string,
    name: string,
    description?: string | null,
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
    friendID: string,
    userID: string,
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
    friendID: string,
    userID: string,
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
    friendID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
