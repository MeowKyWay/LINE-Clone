import useTheme from "../../theme";
import { useAppDispatch, useAppSelector } from "../../hook";
import ChatBubbleRow from "./ChatBubbleRow";
import { useEffect } from "react";
import { fetchUser } from "../../store/thunks/fetchUser";
import ChatTextArea from "./ChatTextArea";

function Chat() {
    
    const theme = useTheme().currentTheme;
    const dispatch = useAppDispatch();

    const currentUser = useAppSelector(state => state.user.currentUser);
    const currentUserErrorMessage = useAppSelector(state => state.user.error);

    const messages = useAppSelector(state => state.messages.messageList);

    useEffect(() => {
        if (currentUser || currentUserErrorMessage) return;
        dispatch(fetchUser());
    })

    const renderedMessages = messages.filter(message => message.chatId === "1").map((message) => { //replace 1 later
        if (!currentUser) return null;
        return (
            <ChatBubbleRow key={message.id} isCurrentUser={message.userId === currentUser?.lineID}>
                {message}
            </ChatBubbleRow>
        );
    });


    return (
        <div
            className="flex-1 border-box border-l h-full flex flex-col"
            style={{
                backgroundColor: theme.color.primary.background,
                borderColor: theme.color.primary.line
            }}>
            <div 
                className="w-full h-15 pt-2 pb-1"
                style={{
                    color: theme.color.primary.text
                }}>
                <div className="flex flex-col justify-center h-full pl-3.5">
                    name
                </div>
            </div>
            <div 
                className="px-3 pb-4 overflow-y-scroll flex flex-col gap-1"
                style={{
                    maxHeight: 'calc(100vh - 228px)',
                }}>
                {renderedMessages}
            </div>
            <ChatTextArea />
        </div>
    );
}

export default Chat;
