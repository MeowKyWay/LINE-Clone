import { Message } from "../../API";
import { useAppSelector } from "../../hook";
import useTheme from "../../theme";
import Time from "../../utilities/Time";
import ProfilePicture from "../ProfilePicture";
import ChatBubble from "./ChatBubble";

function ChatBubbleRow({ children, isCurrentUser }: { children: Message, isCurrentUser: boolean }) {

    const theme = useTheme().currentTheme;

    const currentUser = useAppSelector(state => state.user.currentUser)
    const time = ( //Todo implement
        <div className="flex flex-col">
            <div className="flex-1" />
            <span className="text-2xs font-light" style={{
                color: theme.color.tertiary.text
            }}
            >{Time.timeFormat(new Date(children.createdAt).getTime())}</span>
        </div>
    )

    return (
        <div className={`flex flex-row gap-2 items-center ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
            {!isCurrentUser &&
                <ProfilePicture size="38px" src={currentUser?.image} />
            }
            <div className="size-fit flex flex-row gap-2">
                {isCurrentUser &&
                    time
                }
                <div className={`flex flex-row h-full items-center ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                    <ChatBubble>{children.content}</ChatBubble>
                </div>
                {!isCurrentUser &&
                    time
                }
            </div>
        </div>

    );
}

export default ChatBubbleRow;