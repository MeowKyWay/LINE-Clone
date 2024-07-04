//For testing

import { generateClient } from "aws-amplify/api";
import useTheme from "../theme";
import TextField from "../components/input/TextField";
import { useState } from "react";
import Button from "../components/input/Button";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { createUserFriend, deleteUserFriend } from "../graphql/mutations";
import { invokeLambda } from "../utilities/LambdaUtil";

function TestPage() {

    const theme = useTheme().currentTheme;
    
    const client = generateClient();

    const [friendLineID, setFriendLineID] = useState('');

    const handleAddFriend = async () => {
        const resp = await fetchAuthSession();
        console.log(resp);
        try {
            const res = await invokeLambda({
                arn: 'LINEClone-AddFriend',
                body: {
                    accessToken: resp.tokens?.accessToken,
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
        </div>
    )
}

export default TestPage;