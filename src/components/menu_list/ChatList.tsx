import ChatItem from "../menu-item/ChatItem";
import { ChatType } from "../../store/slice/chatsSlice";

function ChatList({ chats }: { chats: ChatType[] }) {
    const renderChat = chats.map((chat, index) => {
        return <ChatItem value={chat} key={index}></ChatItem>
    })

    return (
        <div className="w-full flex flex-col">
            {renderChat}
        </div>
    )
}

export default ChatList;