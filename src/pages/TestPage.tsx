//For testing

import { generateClient } from "aws-amplify/api";
import useTheme from "../theme";
import TextField from "../components/input/TextField";
import { useState } from "react";
import Button from "../components/input/Button";
import { fetchAuthSession } from "aws-amplify/auth";

function TestPage() {

    const theme = useTheme().currentTheme;
    
    const client = generateClient();

    const [friendID,setFriendID] = useState('');

    const handleAddFriend = async () => {
        // try {

        //     const userID = (await fetchAuthSession()).userSub as string;

        //     const res = await client.graphql({
        //         query: createUserFriend,
        //         variables: {
        //             input: {
        //                 id: userID + ":" + friendID,
        //                 userID: userID,
        //                 friendID: friendID,
        //             }
        //         }
        //     })

        //     console.log(res);
        // }
        // catch (e) {
        //     console.log(e);
        // }
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
                value={friendID}
                onChange={setFriendID}
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
        </div>
    )
}

export default TestPage;