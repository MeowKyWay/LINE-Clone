import { useEffect, useState } from "react";
import { useAppSelector } from "../../hook";
import useTheme from "../../theme";
import ChatBody from "./ChatBody";
import NewChat from "./NewChat";
import { Chat } from "../../API";

function ChatPane() {

    const theme = useTheme().currentTheme;

    const chats = useAppSelector(state => state.chats.friendChats.data);
    const activeChat = useAppSelector(state => state.states.activeChat);

    const [currentChat, setCurrentChat] = useState<string | Chat | null>(null);

    useEffect(() => {
        const chat = chats?.find(chat => chat.friend?.id === activeChat);
        if (chat) {
            setCurrentChat(chat);
            return;
        }
        if (activeChat) {
            setCurrentChat(activeChat);
            return;
        }
        setCurrentChat(null);
    }, [activeChat, chats])

    return (
        <div className="flex-1 border-box border-l h-full flex flex-col" style={{
            backgroundColor: theme.color.primary.background,
            borderColor: theme.color.primary.line
        }}>
            {activeChat &&
                (<div className="size-full">
                    {currentChat === null && <div className="size-full grid place-items-center text-xs font-light" style={{
                        color: theme.color.tertiary.text
                    }}>
                        <span>Start a new conversation!</span>
                    </div>}
                    {typeof currentChat === 'string' && <NewChat friend={currentChat} />}
                    {typeof currentChat !== 'string' && currentChat !== null &&
                        <ChatBody activeChat={currentChat as Chat} />
                    }
                </div>)
            }
        </div>
    )
}

export default ChatPane;
