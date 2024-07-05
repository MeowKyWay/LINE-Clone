import * as CustomAPITypes from "../CustomAPI";
type GeneratedQuery<InputType, OutputType> = string & {
    __generatedQueryInput: InputType;
    __generatedQueryOutput: OutputType;
};

export const listFriend = /* GraphQL */ `query ListUserFriends(
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
        }
        friendID
        friend {
            id
            name
            statusMessage
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
    CustomAPITypes.ListFriendQueryVariables,
    CustomAPITypes.ListFriendQuery
  >;