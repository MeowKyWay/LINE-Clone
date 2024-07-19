/* Amplify Params - DO NOT EDIT
  API_LINECLONE_GRAPHQLAPIENDPOINTOUTPUT
  API_LINECLONE_GRAPHQLAPIIDOUTPUT
  ENV
  REGION
Amplify Params - DO NOT EDIT *//* Amplify Params - DO NOT EDIT
  API_LINECLONE_GRAPHQLAPIENDPOINTOUTPUT
  API_LINECLONE_GRAPHQLAPIIDOUTPUT
  ENV
  REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

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
//Cognito

const getCognitoUser = async (accessToken) => {
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

const getChat = async (id) => {
  try {
    const response = await graphql({
      query: /* GraphQL */ `
        query GET_CHAT($id: ID!) {
          getChat(id: $id) {
            id
          }
        }
      `,
      variables: { id: id }
    })
    console.log("Chat: ", response);
    return response;
  }
  catch (error) {
    return error;
  }
}

export const handler = async (event) => {
  const response = ({ isAuthorized }) => {
    return {
      isAuthorized: isAuthorized,
      resolverContext: {},
    };
  }

  console.log("Event: ", event);

  const accessToken = (event.authorizationToken).split(':')[1];
  const user = await getCognitoUser(accessToken);
  if (!user) {
    console.log("Invalid access token");
    return response({
      isAuthorized: false,
    })
  }

  const queryString = event.requestContext.queryString;
  console.log("Query String: ", queryString);

  if (queryString.split("")[0] === 'query') {
    console.log("Not accepting query");
    return response({
      isAuthorized: false,
    });
  }

  const variables = event.requestContext.variables;
  console.log("Variables: ", variables);

  const query = queryString.match(/{\n[ ]*([a-zA-Z0-9_]+)\(/)[1];
  console.log("Query: ", query);
  const chatID = variables.input.chatID;
  console.log("Chat ID: ", chatID);
  const userID = chatID.split(":")[0];
  console.log("User ID: ", userID);
  const friendID = chatID.split(":")[1];
  console.log("Friend ID: ", friendID);
  const content = variables.input.content;
  console.log("Content: ", content);

  if (userID !== user.Username) {
    console.log("Invalid user");
    return response({
      isAuthorized: false,
    })
  }

  const chat = await getChat(chatID);
  if (!chat) {
    console.log("Chat not found");
    return response({
      isAuthorized: false,
    })
  }

  console.log("Authorized");
  return response({
    isAuthorized: true,
  });
};
