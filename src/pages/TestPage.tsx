//For testing

import { generateClient } from "aws-amplify/api";
import useTheme from "../theme";
import TextField from "../components/input/TextField";
import { useState } from "react";
import Button from "../components/input/Button";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { LambdaARN, invokeLambda } from "../utilities/LambdaUtils";
import { listUsers } from "../graphql/queries";

function TestPage() {

    const theme = useTheme().currentTheme;
    
    const client = generateClient();

    const [friendLineID, setFriendLineID] = useState('');

    const handleAddFriend = async () => {
        const resp = await fetchAuthSession();
        try {
            const res = await invokeLambda({
                arn: LambdaARN.ADD_FRIEND,
                body: {
                    accessToken: resp.tokens?.accessToken,
                    friendID: friendLineID,
                }
            })
            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    }

    const test = async () => {
        try {
            const res = await invokeLambda({
                arn: 'LINECloneAppSyncAddFriend-dev',
            })

            console.log(res);
        } catch (e) {
            console.log(e);
        }
        try {
            const res = await client.graphql({
                query: listUsers,
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