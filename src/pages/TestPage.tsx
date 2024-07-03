//For testing

import { generateClient } from "aws-amplify/api";
import useTheme from "../theme";
import TextField from "../components/input/TextField";
import { useState } from "react";
import Button from "../components/input/Button";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { createUserFriend, deleteUserFriend } from "../graphql/mutations";
import { listUserFriends } from "../graphql/queries";
import { Lambda } from "@aws-sdk/client-lambda";

function TestPage() {

    const theme = useTheme().currentTheme;
    
    const client = generateClient();

    const [friendLineID, setFriendLineID] = useState('');

    const handleAddFriend = async () => {
        try {
            const userLineID = (await getCurrentUser()).username;

            const res = await client.graphql({
                query: createUserFriend,
                variables: {
                    input: {
                        id: userLineID + ":" + friendLineID,
                        userID: userLineID,
                        friendID: friendLineID,
                    }
                }
            })
            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    }

    const handleRemoveFriend = async () => {
        try {
            const userLineID = (await getCurrentUser()).username;

            const res = await client.graphql({
                query: deleteUserFriend,
                variables: {
                    input: {
                        id: userLineID + ":" + friendLineID,
                    }
                }
            })
            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    }

    const handleListFriend = async () => {
        try {
            const lambda = new Lambda({ 
                region: 'ap-southeast-1', 
                credentials: (await fetchAuthSession()).credentials
            });

            const res = await lambda.invoke({
                FunctionName: 'arn:aws:lambda:ap-southeast-1:767398112415:function:LINEClone-listUserFriends',
            })

            console.log(res);
        }
        catch (e) {
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
            <TextField
                type='text'
                value={friendLineID}
                onChange={setFriendLineID}
                className="text-xs w-full"
            >
                FriendID
            </TextField>
            <Button
                type='primary'
                onClick={handleAddFriend}
            >
                Add Friend
            </Button>
            <Button
                type='warning'
                onClick={handleRemoveFriend}
            >
                Remove Friend
            </Button>
            <Button
                type='primary'
                onClick={handleListFriend}
            >
                List Friends
            </Button>
        </div>
    )
}

export default TestPage;