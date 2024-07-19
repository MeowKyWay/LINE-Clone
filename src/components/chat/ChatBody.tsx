import useTheme from "../../theme";
import { useAppSelector } from "../../hook";
import ChatBubbleRow from "./ChatBubbleRow";
import ChatTextArea from "./ChatTextArea";
import { Chat, Message } from "../../API";

function ChatBody({ activeChat }: { activeChat: Chat }) {
    const theme = useTheme().currentTheme;

    const currentUser = useAppSelector(state => state.user.currentUser);
    const myChat = useAppSelector(state => state.chats.friendChats.data)?.filter(chat => chat.id === activeChat.id)[0];
    const friendChat = useAppSelector(state => state.chats.friendChats.data)?.filter(
        chat => chat.id === myChat?.friendID + ":" + myChat?.userID
    )[0];
    const messages = []
    if (myChat) {
        messages.push(...myChat.message?.items as Message[]);
    }
    if (friendChat) {
        messages.push(...friendChat.message?.items as Message[]);
    }

    console.log(messages);

    const renderedMessages = messages.map((message) => {
            if (!currentUser) return null;
            return (
                <ChatBubbleRow key={message?.id} isCurrentUser={message?.chatID.split(":")[0] === currentUser?.lineID}>
                    {message as Message}
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
                    height: 'calc(100vh - 180px)',
                    maxHeight: 'calc(100vh - 180px)',
                }}>
                {renderedMessages}
            </div>
            <ChatTextArea />
        </div>
    );
}

export default ChatBody;