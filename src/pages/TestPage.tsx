//For testing

import { generateClient } from "aws-amplify/api";
import useTheme from "../theme";
import { useState } from "react";
import Button from "../components/input/Button";
import { listUserChats } from "../utilities/APIUtils";
import { invokeLambda } from "../utilities/LambdaUtils";
import { fetchAuthSession } from "aws-amplify/auth";
import { getChat, getMessage, listMessages } from "../graphql/queries";

function TestPage() {

    const theme = useTheme().currentTheme;

    const client = generateClient();

    const [friendLineID, setFriendLineID] = useState('');

    const test = async () => {
        const res = await client.graphql({
            query: /* GraphQL */ `query GetChat(
                $id: ID!
            ) {
            getChat(id: $id) {
                id
                userID
                friendID
                friend {
                id
                name
                statusMessage
                image
                __typename
                }
                message {
                    items {
                        id
                    }
                }
                createdAt
                updatedAt
                __typename
                }
            }
            `,
            variables: {
                id: "dewy_hinges:feeders_wagon"
            }
        })
        console.log(res);
    }

    const test2 = async () => {
        const str = "{ input: { chatID: 'dewy_hinges:feeders_wagon', content: 'Test123' } }"
        const query = str.match(/chatID:\s*["']([^"']+)["']/)[1].replace(/^["']|["']$/g, '')

        console.log(query);
    }

    return (
        <div
            className="flex flex-col items-center"
            style={{
                color: theme.color.primary.text,
            }}
        >
            <h1>Test Page</h1>
            <Button type='primary' onClick={test}>
                Test
            </Button>
            <Button type='primary' onClick={test2}>
                Test2
            </Button>
        </div>
    )
}

export default TestPage;