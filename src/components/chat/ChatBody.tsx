import useTheme from "../../theme";
import { useAppSelector } from "../../hook";
import ChatBubbleRow from "./ChatBubbleRow";
import ChatTextArea from "./ChatTextArea";
import { Chat, Message, User } from "../../API";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import SearchMessages from "../SearchMessages";

function ChatBody({ activeChat }: { activeChat: Chat }) {
    const theme = useTheme().currentTheme;
    const [showSearchField, setShowSearchField] = useState<boolean>(false);

    const currentUser = useAppSelector((state) => state.user.currentUser);
    const myChat = useAppSelector((state) =>
        state.chats.friendChats.data?.filter((chat) => chat.id === activeChat.id)[0]
    );
    const friendChat = useAppSelector((state) =>
        state.chats.friendChats.data?.filter(
            (chat) => chat.id === myChat?.friendID + ":" + myChat?.userID
        )[0]
    );
    const messages = [] as Message[];
    if (myChat && myChat.message?.items) {
        messages.push(...(myChat.message?.items as Message[]));
    }
    if (friendChat && friendChat.message?.items) {
        messages.push(...(friendChat.message?.items as Message[]));
    }

    messages.sort((a, b) => {
        return new Date(a?.createdAt).getTime() - new Date(b?.createdAt).getTime();
    });

    useEffect(() => {
        // Select the container and scroll to the bottom
        const container = document.querySelector('#chat-container');
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, [messages]);

    const renderedMessages = messages.map((message) => {
        if (!currentUser) return null;

        return (
            <ChatBubbleRow
                key={message?.id}
                isCurrentUser={message?.chatID.split(":")[0] === currentUser?.lineID}
                friend={myChat?.friend as User}
                showSearchField={showSearchField}
            >
                {message as Message}
            </ChatBubbleRow>
        );
    });

    return (
        <div className="flex-1 border-box h-full flex flex-col">
            <div
                className="w-full h-15 pt-2 pb-1 flex flex-row justify-between"
                style={{
                    color: theme.color.primary.text,
                }}
            >
                <div className="flex flex-col justify-center h-full pl-3.5">
                    {activeChat?.friend?.name}
                </div>
                <div>
                    <IoSearch onClick={() => setShowSearchField(!showSearchField)} className="cursor-pointer m-4" />
                </div>
            </div>
            {showSearchField && (
                <SearchMessages
                    showSearchField={showSearchField}
                    setShowSearchField={setShowSearchField}
                    messages={messages}
                />
            )}
            <div
                id="chat-container"
                className="px-3 pb-4 overflow-y-scroll flex flex-col gap-1"
                style={{
                    height: showSearchField ? 'calc(100vh - 230px)' : 'calc(100vh - 184px)',
                    maxHeight: 'calc(100vh - 184px)',
                }}
            >
                {renderedMessages}
            </div>
            <ChatTextArea />
        </div>
    );
}

export default ChatBody;
