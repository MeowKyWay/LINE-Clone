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

export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const accessToken = (event.authorizationToken).split(':')[1];
  const user = await getCognitoUser(accessToken);

  const response = {
    isAuthorized: true,
    resolverContext: {
      // eslint-disable-next-line spellcheck/spell-checker
      userid: 'user-id',
      info: 'contextual information A',
      more_info: 'contextual information B',
    },
  };
  console.log(`response >`, JSON.stringify(response, null, 2));
  return response;
};
