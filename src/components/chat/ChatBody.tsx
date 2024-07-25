import useTheme from "../../theme";
import { useAppDispatch, useAppSelector } from "../../hook";
import ChatBubbleRow from "./ChatBubbleRow";
import ChatTextArea from "./ChatTextArea";
import { Chat, Message, User } from "../../API";
import { useEffect , useState} from "react";
import { IoSearch } from "react-icons/io5";
import SearchField from "../input/SearchField";
import { setMessagesTerms } from "../../store/slice/termsSlice";
import { IoClose } from "react-icons/io5";


function ChatBody({ activeChat }: { activeChat: Chat }) {
    const theme = useTheme().currentTheme;
    const [showSearchField , setShowSearchField] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const searchTerm = useAppSelector(state => state.terms.messagesTerm)
    
    const currentUser = useAppSelector(state => state.user.currentUser);
    const myChat = useAppSelector(state => state.chats.friendChats.data)?.filter(chat => chat.id === activeChat.id)[0];
    const friendChat = useAppSelector(state => state.chats.friendChats.data)?.filter(
        chat => chat.id === myChat?.friendID + ":" + myChat?.userID
    )[0];
    const messages = []
    if (myChat && myChat.message?.items) {
        messages.push(...myChat.message?.items as Message[]);
    }
    if (friendChat && friendChat.message?.items) {
        messages.push(...friendChat.message?.items as Message[]);
    }

    messages.sort((a, b) => {
        return new Date(a?.createdAt).getTime() - new Date(b?.createdAt).getTime();
    });

    useEffect(() => {
        // Select the container and scroll to the bottom
        const container = document.querySelector('#chat-container');
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    });

    const renderedMessages = messages.map((message) => {
        if (!currentUser) return null;
        
        return (
            <ChatBubbleRow key={message?.id} isCurrentUser={message?.chatID.split(":")[0] === currentUser?.lineID} friend={myChat?.friend as User}>
                {message as Message}
            </ChatBubbleRow>
        );
    });

    return (
        <div className="flex-1 border-box h-full flex flex-col">
            <div
                className="w-full h-15 pt-2 pb-1 flex flex-row justify-between"
                style={{
                    color: theme.color.primary.text
                }}>
                <div className="flex flex-col justify-center h-full pl-3.5">
                    {activeChat?.friend?.name}
                </div>
                <div>
                    <IoSearch onClick={() => setShowSearchField(!showSearchField)} className="cursor-pointer m-4"></IoSearch>
                </div>
            </div>
            {
                showSearchField && (<div className="flex items-center ml-4 mb-2">
                    <SearchField 
                        height="36px" 
                        width="90%" 
                        value={searchTerm} 
                        onChange={(value) => dispatch(setMessagesTerms(value))}>
                    </SearchField>
                    <IoClose style={{color: theme.color.primary.text}} 
                        className="ml-2 cursor-pointer" 
                        onClick={() => setShowSearchField(!showSearchField)}>
                    </IoClose>
                </div>)
            }
            <div
                id="chat-container"
                className="px-3 pb-4 overflow-y-scroll flex flex-col gap-1"
                style={{
                    height: 'calc(100vh - 184px)',
                    maxHeight: 'calc(100vh - 184px)',
                }}>
                {renderedMessages}
            </div>
            <ChatTextArea />
        </div>
    );
}

export default ChatBody;