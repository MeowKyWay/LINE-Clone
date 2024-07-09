//For testing

import { generateClient } from "aws-amplify/api";
import useTheme from "../theme";
import TextField from "../components/input/TextField";
import { useState } from "react";
import Button from "../components/input/Button";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { LambdaARN, invokeLambda } from "../utilities/LambdaUtils";
import { listUsers } from "../graphql/queries";
import { createUserFriend } from "../graphql/mutations";

function TestPage() {

    const theme = useTheme().currentTheme;
    
    const client = generateClient();

    client.g

    const [friendLineID, setFriendLineID] = useState('');

    const test = async () => {
        try {
            const res = await invokeLambda({
                arn: 'LINECloneAddFriend-dev',
                body: {
                    accessToken: (await fetchAuthSession()).tokens?.accessToken.toString(),
                    friendID: "aonprasertn",
                }
            })

            console.log(res);
        } catch (e) {
            console.log(e);
        }
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
        </div>
    )
}

export default TestPage;