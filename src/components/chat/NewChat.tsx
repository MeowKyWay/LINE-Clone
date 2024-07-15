import { useAppDispatch, useAppSelector } from "../../hook";
import { newFriendChat } from "../../store/thunks/chatsThunk";
import useTheme from "../../theme";
import Button from "../input/Button";
import ProfilePicture from "../ProfilePicture";

function NewChat({friend}: {friend: string}) {

    const account = useAppSelector(state => state.friends.friends.data)?.find(f => f.id === friend);
    const theme = useTheme().currentTheme;

    const dispatch = useAppDispatch();

    const handleNewChat = async () => {
        dispatch(newFriendChat(friend));
    }

    return (
        <div className="flex flex-col justify-center items-center size-full gap-4" style={{
            color: theme.color.primary.text,
        }}>
            <ProfilePicture size="100px" src={account?.image} />
            {account?.name}
            <Button type="primary" onClick={handleNewChat}>
                Chat
            </Button>
        </div>
    )
}

export default NewChat;