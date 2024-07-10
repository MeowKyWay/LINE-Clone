/* Amplify Params - DO NOT EDIT
  API_LINECLONE_GRAPHQLAPIENDPOINTOUTPUT
  API_LINECLONE_GRAPHQLAPIIDOUTPUT
  ENV
  REGION
Amplify Params - DO NOT EDIT */

import crypto from '@aws-crypto/sha256-js';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { default as fetch, Request } from 'node-fetch';
import { CognitoIdentityProviderClient, GetUserCommand } from "@aws-sdk/client-cognito-identity-provider";

const cognitoClient = new CognitoIdentityProviderClient({
  region: process.env.AWS_REGION
});

//GraphQL
const { Sha256 } = crypto;
const GRAPHQL_ENDPOINT = process.env.API_LINECLONE_GRAPHQLAPIENDPOINTOUTPUT;
const endpoint = new URL(GRAPHQL_ENDPOINT);
const signer = new SignatureV4({
  credentials: defaultProvider(),
  region: process.env.AWS_REGION,
  service: 'appsync',
  sha256: Sha256
});
const graphql = async (query) => {
  const httpRequest = new HttpRequest({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      host: endpoint.host
    },
    hostname: endpoint.host,
    body: JSON.stringify(query),
    path: endpoint.pathname
  });
  const signedHttpRequest = await signer.sign(httpRequest);
  const request = new Request(endpoint, signedHttpRequest);
  try {
    const response = await fetch(request);
    return response.json();
  } catch (error) {
    return error;
  }
}
//GraphQL

const getUser = async (accessToken) => {
  try {
    const response = await cognitoClient.send(
      new GetUserCommand({
        AccessToken: accessToken
      })
    )
    console.log("User: ", response);
    return response;
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
}
const getFriend = async (friendID) => {
  const response = await graphql({
    query: /* GraphQL */ `
      query GET_USER($id: ID!) {
        getUser(id: $id) {
          id
        }
      }
    `,
    variables: { id: friendID }
  })
  console.log("Friend: ", response);
  return response;
}
const getUserFriend = async (userID, friendID) => {
  const response = await graphql({
    query: /* GraphQL */ `
      query GET_USER_FRIEND($id: ID!) {
        getUserFriend(id: $id) {
          id
        }
      }
    `,
    variables: { id: userID + ":" + friendID }
  })
  console.log("UserFriend: ", response);
  return response;
}
const createUserFriend = async (userID, friendID, status) => {
  const response = await graphql({
    query: /* GraphQL */ `
      mutation CREATE_USER_FRIEND($input: CreateUserFriendInput!) {
        createUserFriend(input: $input) {
          id
          userID
          friendID
          status
          createdAt
          updatedAt

          user {
            id
            name 
            statusMessage
            createdAt
            updatedAt
          }
          
          friend {
            id
            name
            statusMessage
            createdAt
            updatedAt
          }
        }
      }
    `,
    variables: {
      input: {
        id: userID + ":" + friendID,
        userID: userID,
        friendID: friendID,
        status: status,
      }
    }
  })
  console.log("CreateUserFriend: ", response);
  return response;
}
const updateUserFriend = async (userID, friendID, status) => {
  const response = await graphql({
    query: /* GraphQL */ `
      mutation UPDATE_USER_FRIEND($input: UpdateUserFriendInput!) {
        updateUserFriend(input: $input) {
          id
          status
        }
      }
    `,
    variables: {
      input: {
        id: userID + ":" + friendID,
        status: status,
      }
    }
  });
  console.log("UpdateUserFriend: ", response);
  return response;
};

const response = (body) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
      message: body,
    }),
  }
};
const error = (body) => {
  return {
    statusCode: 400,
    body: JSON.stringify({
      status: "error",
      message: body,
    }),
  }
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

export const handler = async (event) => {
  if (!event.accessToken)
    return error("Missing property \"accessToken\"");
  if (!event.friendID)
    return error("Missing property \"friendID\"");

  const user = (await getUser(event.accessToken));
  if (!user)
    return error("Invalid access token")
  const userID = user.Username;

  const friendID = event.friendID;
  const friend = await getFriend(friendID);
  if (!friend.data.getUser)
    return error("Friend does not exist");

  if (friendID === userID)
    return error("Cannot add self")

  const userFriend = (await getUserFriend(userID, friendID));
  if (userFriend.data.getUserFriend)
    return error("Friend already added");

  const friendUser = (await getUserFriend(friendID, userID));
  if (friendUser.data.getUserFriend) {
    try {
      await updateUserFriend(friendID, userID, "accepted");
      await createUserFriend(userID, friendID, "accepted");
    } catch (error) {
      return error("Failed to accepted friend");
    }
    return response("Friend accepted");
  }
  try {
    await createUserFriend(userID, friendID, "pending");
    return response("Friend request sent");
  } catch (error) {
    return error("Failed to add friend");
  }
};