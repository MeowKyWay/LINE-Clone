/* Amplify Params - DO NOT EDIT
  API_LINECLONE_GRAPHQLAPIENDPOINTOUTPUT
  API_LINECLONE_GRAPHQLAPIIDOUTPUT
  ENV
  REGION
Amplify Params - DO NOT EDIT */

//GraphQL
import crypto from '@aws-crypto/sha256-js';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { default as fetch, Request } from 'node-fetch';

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

//Cognito
import { CognitoIdentityProviderClient, GetUserCommand } from "@aws-sdk/client-cognito-identity-provider";
const cognitoClient = new CognitoIdentityProviderClient({
  region: process.env.AWS_REGION
});

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
//Cognito

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
const getChat = async (userID, friendID) => {
  const response = await graphql({
    query: /* GraphQL */ `
      query GET_CHAT($id: ID!) {
        getChat(id: $id) {
          id
        }
      }
    `,
    variables: { id: userID + ":" + friendID }
  })
  console.log("Chat: ", response);
  return response;
}
const createChat = async (userID, friendID) => {
  const response = await graphql({
    query: /* GraphQL */ `
      mutation CREATE_CHAT($input: CreateChatInput!) {
        createChat(input: $input) {
          id
          userID
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
      }
    `,
    variables: {
      input: {
        id: userID + ":" + friendID,        
        userID: userID,
        friendID: friendID,
        lastReadTime: new Date().toISOString(),
      }
    }
  })
  console.log("CreateChat: ", response);
  return response;
}

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
    return error("Cannot create new chat with self")

  const userFriend = (await getChat(userID, friendID));
  if (userFriend.data.getChat)
    return error("Chat already exists");

  try {
    await createChat(userID, friendID);
    await createChat(friendID, userID);
  } catch (error) {
    return error("Failed to create chat");
  }

  return response("Chat created");
};