import * as CustomAPITypes from "../CustomAPI";
type GeneratedQuery<InputType, OutputType> = string & {
    __generatedQueryInput: InputType;
    __generatedQueryOutput: OutputType;
};

export const listUserFriendRequests = /* GraphQL */ `query ListUserFriends(
    $filter: ModelUserFriendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
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
    CustomAPITypes.ListUserFriendRequestsQueryVariables,
    CustomAPITypes.ListUserFriendRequestsQuery
  >;