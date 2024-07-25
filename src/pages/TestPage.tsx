//For testing

import { generateClient } from "aws-amplify/api";
import useTheme from "../theme";
import { useState } from "react";
import Button from "../components/input/Button";
import { listUserChats } from "../utilities/APIUtils";
import { invokeLambda, LambdaARN } from "../utilities/LambdaUtils";
import { fetchAuthSession } from "aws-amplify/auth";
import { getChat, getMessage, listMessages } from "../graphql/queries";

function TestPage() {

    const theme = useTheme().currentTheme;

    const client = generateClient();

    const [friendLineID, setFriendLineID] = useState('');

    const test = async () => {
        try {
            const res = await invokeLambda({
                arn: LambdaARN.READ_CHAT,
                body: {
                    accessToken: (await fetchAuthSession()).tokens?.accessToken.toString(),
                    friendID: 'dewy_hinges',
                }
            })
            console.log(res);
        } catch (e) {
            console.log(e);
        }
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
            <Button variant='primary' onClick={test}>
                Test
            </Button>
            <Button variant='primary' onClick={test2}>
                Test2
            </Button>
        </div>
    )
}

export default TestPage;