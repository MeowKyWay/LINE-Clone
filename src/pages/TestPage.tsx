//For testing

import { generateClient } from "aws-amplify/api";
import useTheme from "../theme";
import { useState } from "react";
import Button from "../components/input/Button";
import { listUserChats } from "../utilities/APIUtils";
import { invokeLambda } from "../utilities/LambdaUtils";
import { fetchAuthSession } from "aws-amplify/auth";

function TestPage() {

    const theme = useTheme().currentTheme;
    
    const client = generateClient();

    const [friendLineID, setFriendLineID] = useState('');

    const test = async () => {
        const res = await invokeLambda({
            arn: 'LINECloneNewChat-dev',
            body: {
                accessToken: (await fetchAuthSession()).tokens?.accessToken.toString(),
                friendID: "broths_tractor"
            }
        })
        console.log(res);
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