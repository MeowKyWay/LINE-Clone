import useTheme from "../../theme";
import { useAppSelector } from "../../hook";
import ChatBubbleRow from "./ChatBubbleRow";
import ChatTextArea from "./ChatTextArea";

function ChatBody() {
    const theme = useTheme().currentTheme;

    const currentUser = useAppSelector(state => state.user.currentUser);
    const activeChat = useAppSelector(state => state.states.activeChat);
    const messages = useAppSelector(state => state.messages.messageList);

    const renderedMessages = messages.filter(message => message.chatId === activeChat?.id).map((message) => { //replace 1 later
        if (!currentUser) return null;
        return (
            <ChatBubbleRow key={message.id} isCurrentUser={message.userId === currentUser?.lineID}>
                {message}
            </ChatBubbleRow>
        );
    });

    return (
        <div className="flex-1 border-box h-full flex flex-col">
            <div
                className="w-full h-15 pt-2 pb-1"
                style={{
                    color: theme.color.primary.text
                }}>
                <div className="flex flex-col justify-center h-full pl-3.5">
                    {activeChat?.friend?.name}
                </div>
            </div>
            <div
                className="px-3 pb-4 overflow-y-scroll flex flex-col gap-1"
                style={{
                    height: 'calc(100vh - 228px)',
                    maxHeight: 'calc(100vh - 228px)',
                }}>
                {renderedMessages}
            </div>
            <ChatTextArea />
        </div>
    );
}

export default ChatBody;