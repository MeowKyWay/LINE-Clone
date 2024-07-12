import { Chat } from "../../API";
import ChatItem from "../menu-item/ChatItem";

function ChatList({ chats }: { chats: Chat[] }) {
    //console.log(chats);
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