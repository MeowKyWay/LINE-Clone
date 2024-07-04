/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  statusMessage: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  statusMessage?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  id?: ModelStringInput | null,
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

export type User = {
  __typename: "User",
  id: string,
  name: string,
  statusMessage: string,
  friends?: ModelUserFriendConnection | null,
  friendOf?: ModelUserFriendConnection | null,
  createdAt: string,
  updatedAt: string,
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
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  statusMessage?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateUserFriendInput = {
  id?: string | null,
  userID: string,
  friendID: string,
};

export type ModelUserFriendConditionInput = {
  userID?: ModelIDInput | null,
  friendID?: ModelIDInput | null,
  and?: Array< ModelUserFriendConditionInput | null > | null,
  or?: Array< ModelUserFriendConditionInput | null > | null,
  not?: ModelUserFriendConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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

export type UpdateUserFriendInput = {
  id: string,
  userID?: string | null,
  friendID?: string | null,
};

export type DeleteUserFriendInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  statusMessage?: ModelStringInput | null,
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

export type ModelUserFriendFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  friendID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFriendFilterInput | null > | null,
  or?: Array< ModelUserFriendFilterInput | null > | null,
  not?: ModelUserFriendFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  statusMessage?: ModelSubscriptionStringInput | null,
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
  friendID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFriendFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFriendFilterInput | null > | null,
  userID?: ModelStringInput | null,
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
    friends?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    friendOf?:  {
      __typename: "ModelUserFriendConnection",
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
    friends?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    friendOf?:  {
      __typename: "ModelUserFriendConnection",
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
    friends?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    friendOf?:  {
      __typename: "ModelUserFriendConnection",
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
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
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
    friends?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    friendOf?:  {
      __typename: "ModelUserFriendConnection",
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
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserFriendsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFriendFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserFriendsByUserIDQuery = {
  userFriendsByUserID?:  {
    __typename: "ModelUserFriendConnection",
    items:  Array< {
      __typename: "UserFriend",
      id: string,
      userID: string,
      friendID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserFriendsByFriendIDQueryVariables = {
  friendID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFriendFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserFriendsByFriendIDQuery = {
  userFriendsByFriendID?:  {
    __typename: "ModelUserFriendConnection",
    items:  Array< {
      __typename: "UserFriend",
      id: string,
      userID: string,
      friendID: string,
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
    friends?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    friendOf?:  {
      __typename: "ModelUserFriendConnection",
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
    friends?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    friendOf?:  {
      __typename: "ModelUserFriendConnection",
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
    friends?:  {
      __typename: "ModelUserFriendConnection",
      nextToken?: string | null,
    } | null,
    friendOf?:  {
      __typename: "ModelUserFriendConnection",
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
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
      createdAt: string,
      updatedAt: string,
    } | null,
    friendID: string,
    friend?:  {
      __typename: "User",
      id: string,
      name: string,
      statusMessage: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
