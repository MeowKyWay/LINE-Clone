import { Chat } from "../../API";
import ChatItem from "../menu-item/ChatItem";

function ChatList({ chats }: { chats: Chat[] }) {

    chats.sort((a, b) => {
        if (a.updatedAt && b.updatedAt) {
            return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        }
        return 0;
    })
    //console.log(chats);
    const renderChat = chats.map((chat, index) => {
        return <ChatItem chat={chat} key={index}></ChatItem>
    })

    return (
        <div className="w-full flex flex-col">
            {renderChat}
        </div>
    )
}

export default ChatList;