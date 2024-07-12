import { useAppSelector } from "../../hook";
import useTheme from "../../theme";
import ChatBody from "./ChatBody";

function Chat() {

    const theme = useTheme().currentTheme;

    const activeChat = useAppSelector(state => state.states.activeChat);

    return (
        <div className="flex-1 border-box border-l h-full flex flex-col" style={{
            backgroundColor: theme.color.primary.background,
            borderColor: theme.color.primary.line
        }}>
            {activeChat ? <ChatBody /> :
                <div className="size-full grid place-items-center text-xs font-light" style={{
                    color: theme.color.tertiary.text
                }}>
                    <span>Start a new conversation!</span>
                </div>
            }
        </div>
    )
}

export default Chat;
