import { useAppDispatch, useAppSelector } from "../../hook";
import { newFriendChat } from "../../store/thunks/chatsThunk";
import useTheme from "../../theme";
import Button from "../input/Button";
import ProfilePicture from "../profile/ProfilePicture";

function NewChat() {

    const activeChat = useAppSelector(state => state.states.activeChat);
    const account = useAppSelector(state => state.friends.friends.data)?.find(f => f.id === activeChat);
    const theme = useTheme().currentTheme;

    // console.log(activeChat);

    const dispatch = useAppDispatch();

    const handleNewChat = async () => {
        dispatch(newFriendChat(activeChat as string));
    }

    return (
        <div className="flex flex-col justify-center items-center size-full gap-4" style={{
            color: theme.color.primary.text,
        }}>
            <ProfilePicture size="100px" src={account?.image} />
            {account?.name}
            <Button variant="primary" onClick={handleNewChat}>
                Chat
            </Button>
        </div>
    )
}

export default NewChat;