import { Chat } from "../../API";
import { useAppDispatch } from "../../hook";
import { setActiveChat } from "../../store/slice/statesSlice";
import useTheme from "../../theme";
import Time from "../../utilities/Time";
import ProfilePicture from "../ProfilePicture";
import UnreadBubble from "../UnreadBubble";

function ChatItem({ chat }: { chat: Chat }) {
    const dispatch = useAppDispatch();

    const theme = useTheme().currentTheme;

    return (
        <div className="w-full cursor-pointer" onClick={() => dispatch(setActiveChat(chat.id))}>
            <style>
                {`
                .hover:hover {
                    background-color: ${theme.color.tertiary.background};
                }

                .h-71px {
                    height: 71px;
                }
                `}
            </style>
            <div className="h-71px w-full pl-4 pr-1 flex flex-row items-center hover">
                <ProfilePicture size="53px" src={chat.friend?.image as string} />
                <div className="flex flex-row items-center h-full ml-3 relative" style={{ width: 'calc(100% - 69px)' }}>
                    <div className="flex flex-col flex-1">
                        <span className="overflow-hidden whitespace-nowrap text-ellipsis w-36" style={{
                            color: theme.color.primary.text,
                            fontSize: '12px',
                        }}>
                            {chat.friend?.name}
                        </span>
                        <span className="overflow-hidden line-clamp-2 text-ellipsis" style={{
                            color: theme.color.tertiary.text,
                            fontSize: '10px',
                        }}>
                            {"test"} {/*Implement last message later*/}
                        </span>
                    </div>
                    <div className="flex flex-col items-end justify-items-center w-16 relative">
                        <div>
                            {/*value.unread!==0*/ true && <UnreadBubble>{0}</UnreadBubble>}
                        </div>
                    </div>
                    <span className="absolute top-1 right-0" style={{
                        color: theme.color.tertiary.text,
                        fontSize: '11px',
                        fontWeight: '200'
                    }}>
                        {(chat.updatedAt) ? Time.timeFormat((new Date(chat.updatedAt)).getTime()) : false}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ChatItem;