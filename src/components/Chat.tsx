import useTheme from "../theme";
import { useAppSelector } from "../hook";
import ProfilePicture from "./ProfilePicture";
import { useState, useMemo , useRef } from "react";
import { format } from 'date-fns';
import { UserChat, ReceiverChat } from  "./ChatBubble";
import { TextAreaChat } from "./input/TextAreaChat";
import { TiAttachment } from "react-icons/ti";

function Chat() {
    const messageList = useAppSelector(state => state.messages.messageList);
    const [term, setTerm] = useState('');
    const theme = useTheme().currentTheme;
    const imgFileInput = useRef<HTMLInputElement>(null)


    const sortedMessageList = useMemo(() => {
        return [...messageList].sort((a, b) => a.createdAt - b.createdAt);
    }, [messageList]);

    async function uploadImg(){
        if(imgFileInput.current){
            imgFileInput.current.click()
        }
    }

    const style = {
        backgroundColor: theme.color.primary.background,
        borderColor: theme.color.primary.line
    };

    const receiverNameStyle = {
        color: theme.color.chat.text
    };

    const inputChatStyle = {
        borderColor: theme.color.chat.inputChat
    };

    const renderedMessages = sortedMessageList.filter(message => message.chatId === 2).map((message, index) => {
        const isUserMessage = message.userId === 1;
        const formattedTime = format(new Date(message.createdAt), 'h:mm a');

        return (
            <div key={index} className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'} mb-4`}>
                {isUserMessage ? (
                    <div className="relative">
                        <UserChat>
                            <span className="block">{message.message}</span>
                        </UserChat>
                        <div>
                            <div className="text-xs absolute" style={{ left: "-35px", bottom: "20px", color: "#6e6f70"}}>Read</div>
                            <div className="text-xs absolute" 
                                id="userChat-time" 
                                style={{ left: "-50px", bottom: "3px", color: "#6e6f70"}}>
                                {formattedTime}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-start space-x-4 relative">
                        <ProfilePicture size="34px" />
                        <ReceiverChat backgroundColor={theme.color.chat.background} color={theme.color.chat.text}>
                            <span className="block">{message.message}</span>
                        </ReceiverChat>
                        <div className="text-xs block absolute" 
                            id="receiverChat-time" 
                            style={{ right: "-50px", bottom: "3px", color: "#6e6f70"}}>
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
                <TextAreaChat
                    onChange={(e) => setTerm(e.target.value)}
                    value={term} placeholder="Enter a message"
                    style={receiverNameStyle}/>
                <input type="file" ref={imgFileInput} className="absolute w-0 h-0"></input>
                <button onClick={uploadImg}>
                    <TiAttachment style={receiverNameStyle} size="24px" className="ml-4"/>
                </button>
            </div>
        </div>
    );
}

export default Chat;
