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
        const res = (await fetchAuthSession()).tokens?.accessToken.toString();
        console.log(res);
    }

    const test2 = async () => {
        const str = "mutation MyMutation {\n  createMessage(input: {chatID: \"feeders_wagon:broths_tractor\", content: \"12345\"}) {\n    id\n    chatID\n    content\n    createdAt\n  }\n}\n"
        const query = str.match(/{\n[ ]*([a-zA-Z0-9_]+)\(/);

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