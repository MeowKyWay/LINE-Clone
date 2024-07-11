//For testing

import { generateClient } from "aws-amplify/api";
import useTheme from "../theme";
import { useState } from "react";
import Button from "../components/input/Button";
import { listUserChats } from "../utilities/APIUtils";

function TestPage() {

    const theme = useTheme().currentTheme;
    
    const client = generateClient();

    const [friendLineID, setFriendLineID] = useState('');

    const test = async () => {
        console.log(await listUserChats());
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