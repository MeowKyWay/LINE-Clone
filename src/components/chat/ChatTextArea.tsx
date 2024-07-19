import { useState } from "react";
import useTheme from "../../theme";
import { useAppDispatch, useAppSelector } from "../../hook";
import { newMessage } from "../../store/thunks/messageThunk";

function ChatTextArea() {

    const theme = useTheme().currentTheme;
    const dispatch = useAppDispatch();

    const [message, setMessage] = useState('');
    const activeChat = useAppSelector(state => state.states.activeChat);
    const currentUser = useAppSelector(state => state.user.currentUser);

    const sendMessage = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key !== 'Enter') return;
        if (event.shiftKey) return;
        event.preventDefault();
        console.log(message);
        dispatch(newMessage({
            userID: currentUser?.lineID as string,
            friendID: activeChat as string,
            content: message,
        }))
        // send message to backend
    }

    return (
        <div
            className="h-30 border-box border-t flex flex-col pt-3"
            style={{
                borderColor: theme.color.primary.line,
                minHeight: '120px',
            }}>
            <textarea
                className="size-full bg-transparent focus:outline-none text-sm flex-1 px-3.5"
                placeholder="Enter a message"
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {sendMessage(e)}}
                style={{
                    resize: 'none',
                    color: theme.color.primary.text,
                }}>
            </textarea>
            <div className="h-10"></div>
        </div>
    )
}

export default ChatTextArea;