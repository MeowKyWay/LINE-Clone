import { useAppSelector } from "../../hook";
import { MessageType } from "../../store/slice/messagesSlice";
import ProfilePicture from "../ProfilePicture";
import ChatBubble from "./ChatBubble";

function ChatBubbleRow({ children, isCurrentUser }: { children: MessageType, isCurrentUser: boolean }) {

    const currentUser = useAppSelector(state => state.user.currentUser) 
    const time = ( //Todo implement
        <div className="flex flex-col">
            <div className="flex-1"/>
            <span>Time</span>
        </div>
    )

    return (
        <div className={`flex flex-row gap-2 ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
            { !isCurrentUser &&
                <ProfilePicture size="38px" src={currentUser?.image} />
            }
            { isCurrentUser &&
                time
            }
            <div className={`flex flex-row h-full items-center ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                <ChatBubble>{children.message}</ChatBubble>
            </div>
            { !isCurrentUser &&
                time
            }
        </div>

    );
}

export default ChatBubbleRow;