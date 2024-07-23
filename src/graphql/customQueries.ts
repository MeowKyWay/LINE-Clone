import * as CustomAPITypes from "../CustomAPI";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const listFriend = /* GraphQL */ `query ListFriends(
    $filter: ModelUserFriendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        user {
          id
          name
          statusMessage
          image
          coverImage
          __typename
        }
        friendID
        friend {
            id
            name
            statusMessage
            image
            coverImage
            __typename
        }
        status
        favorite
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
  ` as GeneratedQuery<
  CustomAPITypes.ListFriendQueryVariables,
  CustomAPITypes.ListFriendQuery
>;

export const listFriendRequests = /* GraphQL */ `query ListFriendRequests(
  $filter: ModelUserFriendFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      user {
        id
        name
        statusMessage
        image
        coverImage
        __typename
      }
      friendID
      friend {
          id
          name
          statusMessage
          image
          coverImage
          __typename
      }
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
CustomAPITypes.ListFriendRequestQueryVariables,
CustomAPITypes.ListFriendRequestQuery
>;

export const listMyChats = /* GraphQL */ `query ListMyChats(
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        friendID
        friend {
          id
          name
          statusMessage
          image
          createdAt
          updatedAt
          __typename
        }
        message {
          items {
            id
            chatID
            content
            createdAt
            updatedAt
            __typename
          }
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
  ` as GeneratedQuery<
  CustomAPITypes.ListMyChatsQueryVariables,
  CustomAPITypes.ListMyChatsQuery
>;