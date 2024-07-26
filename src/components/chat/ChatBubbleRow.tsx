import { Message, User } from "../../API";
import { useAppDispatch, useAppSelector } from "../../hook";
import { setAccountModalState } from "../../store/slice/statesSlice";
import useTheme from "../../theme";
import Time from "../../utilities/Time";
import ProfilePicture from "../profile/ProfilePicture";
import ChatBubble from "./ChatBubble";

function ChatBubbleRow({ children, isCurrentUser , friend , showSearchField}: { children: Message, isCurrentUser: boolean , friend : User , showSearchField : boolean}) {


    const theme = useTheme().currentTheme;

    const dispatch = useAppDispatch();

    const chat = useAppSelector(state => state.chats.friendChats.data)?.find(
        chat => chat.id === children.friendID + ":" + children.userID
    )
    console.log(children.friendID + ":" + children.userID)
    const lastReadTime = new Date(chat?.lastReadTime as string).getTime();
    console.log({
        chat: chat,
        message: children.content,
        read: new Date(chat?.lastReadTime as string),
        send: new Date(children.createdAt),
    })

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
                <ProfilePicture size="38px" src={friend?.image} onClick={() => dispatch(setAccountModalState(chat.friend as User))}/>
            }
            <div className="flex flex-row gap-2 items-end">
                {isCurrentUser &&
                    <div className="flex flex-col items-end justify-start">
                        {lastReadTime > new Date(children.createdAt).getTime() &&
                            <span className="text-2xs font-light" style={{color: theme.color.tertiary.text}}>Read</span>
                        }
                        <div className="flex-1"/>
                        <span>{time}</span>
                    </div>
                }
                <div className={`flex flex-row h-full items-center ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                    <ChatBubble isCurrentUser={isCurrentUser ? true : false} showSearchField={showSearchField}>{children.content}</ChatBubble>
                </div>
                {!isCurrentUser &&
                    <div className="h-full flex flex-col justify-end">
                        <span>{time}</span>
                    </div>
                }
            </div>
        </div>

    );
}

export default ChatBubbleRow;