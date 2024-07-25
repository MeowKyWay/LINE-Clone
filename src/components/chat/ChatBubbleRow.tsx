import { Message, User } from "../../API";
import useTheme from "../../theme";
import Time from "../../utilities/Time";
import ProfilePicture from "../profile/ProfilePicture";
import ChatBubble from "./ChatBubble";

function ChatBubbleRow({ children, isCurrentUser , friend , showSearchField}: { children: Message, isCurrentUser: boolean , friend : User , showSearchField : boolean}) {

    const theme = useTheme().currentTheme;

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
                <ProfilePicture size="38px" src={friend?.image} />
            }
            <div className="size-fit flex flex-row gap-2">
                {isCurrentUser &&
                    time
                }
                <div className={`flex flex-row h-full items-center ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                    <ChatBubble isCurrentUser={isCurrentUser ? true : false} showSearchField={showSearchField}>{children.content}</ChatBubble>
                </div>
                {!isCurrentUser &&
                    time
                }
            </div>
        </div>

    );
}

export default ChatBubbleRow;