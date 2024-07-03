import useTheme from "../theme";
import { useAppSelector } from "../hook";
import ProfilePicture from "./ProfilePicture";
import { useState, useMemo } from "react";
import { format } from 'date-fns';

function Chat() {
    const messageList = useAppSelector(state => state.messages.messageList);
    const [term, setTerm] = useState('');
    const theme = useTheme().currentTheme;

    const sortedMessageList = useMemo(() => {
        return [...messageList].sort((a, b) => a.createdAt - b.createdAt);
    }, [messageList]);

    const style = {
        backgroundColor: theme.color.primary.background,
        borderColor: theme.color.primary.line
    };

    const receiverChatStyle = {
        backgroundColor: theme.color.chat.background,
        color: theme.color.chat.text
    };

    const receiverNameStyle = {
        color: theme.color.chat.text
    };

    const inputChatStyle = {
        borderColor: theme.color.chat.inputChat
    }

    const renderedMessages = sortedMessageList.filter(message => message.chatId === 2).map((message, index) => {
        const isUserMessage = message.userId === 1;
        const formattedTime = format(new Date(message.createdAt), 'h:mm a');

        return (
            <div key={index} className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'} mb-4`}>
                {isUserMessage ? (
                    <div className="relative">
                        <div className="max-w-xs px-4 py-2 rounded-lg break-words relative user-chat" style={{backgroundColor: '#86d97b'}}>
                            <span className="block">{message.message}</span>
                        </div>
                        <div className="text-xs text-gray-600 block absolute" id="userChat-time" style={{ left: "-50px", bottom: "3px" }}>
                            {formattedTime}
                        </div>
                    </div>
                ) : (
                    <div className="flex items-start space-x-4 relative">
                        <ProfilePicture size="34px" />
                        <div className="max-w-xs px-4 py-2 rounded-lg break-words relative receiver-chat" style={receiverChatStyle}>
                            <span className="block">{message.message}</span>
                        </div>
                        <div className="text-xs text-gray-400 block absolute" id="receiverChat-time" style={{ right: "-50px", bottom: "3px" }}>
                            {formattedTime}
                        </div>
                    </div>
                )}
            </div>
        );
    });

    return (
        <div className="flex-1 border-box border-l h-full" style={style}>
            <div className="w-full ml-4 mt-4 font-semibold" style={receiverNameStyle}>
                name
            </div>
            <div className="p-4 h-full overflow-y-auto" style={{ maxHeight: "calc(-192px + 100vh)" }}>
                {renderedMessages}
            </div>
            <div className="relative h-full">
                <div className="w-full border-t" style={inputChatStyle}></div>
                <textarea onChange={(e) => setTerm(e.target.value)}
                    value={term} placeholder="Enter a message"
                    className="p-4 bg-transparent w-full"
                    style={receiverNameStyle} />
                <style>
                    {`
                        .p-4::placeholder {
                            color: #555555; 
                            font-size: 14px;
                        }
                        textarea{
                            height: 150px;
                        }
                        textarea:focus {
                            outline: none;
                            border-color: initial;
                        }
                        .user-chat::after {
                            content: '';
                            position: absolute;
                            right: -8px;
                            top: 15px;
                            width: 0;
                            height: 0;
                            border: 10px solid transparent;
                            border-left-color: #86d97b;
                            border-right: 0;
                            border-bottom: 0;
                            margin-top: -5px;
                        }
                        .receiver-chat::before {
                            content: '';
                            position: absolute;
                            left: -8px;
                            top: 15px;
                            width: 0;
                            height: 0;
                            border: 10px solid transparent;
                            border-right-color: ${theme.color.chat.background};
                            border-left: 0;
                            border-bottom: 0;
                            margin-top: -5px;
                        }
                    `}
                </style>
            </div>
        </div>
    );
}

export default Chat;
