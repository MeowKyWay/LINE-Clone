import { useSelector } from "react-redux";
import SearchField from "../components/SearchField";
import { StoreType } from "../store";
import { setChatsTerms } from "../store/slice/termsSlice";
import ChatList from "../components/menu_list/ChatList";
import ArrayUtils from "../utilities/ArrayUtils";

function ChatsPage() {

    const chatFolders = useSelector((state: StoreType) => state.user.currentUser.chatFolders);
    const searchTerm = useSelector((state: StoreType) => state.terms.chatsTerm);
    const chatFolderState = useSelector((state: StoreType) => state.states.chatFolderState);

    const chats = useSelector((state: StoreType) => state.chats.chatList);
    const chatSorted = chats.slice().sort((a, b) => b.lastUpdate - a.lastUpdate);
    
    let selectedChat, chatFolder;
    switch (chatFolderState) {
        case 'All':
            selectedChat = chatSorted.slice();
            break;
        case 'Friends':
            selectedChat = chatSorted.slice().filter(chat => chat.type==='friend');
            break;
        case 'Groups':
            selectedChat = chatSorted.slice().filter(chat => chat.type==='group');
            break;
        default:
            chatFolder = chatFolders.find(folder => folder.name===chatFolderState);
            if (!chatFolder) {
                selectedChat = chatSorted.slice();
                break;
            }
            selectedChat = ArrayUtils.filterByIdArray(chatSorted.slice(), chatFolder.chatID);
            break;
    }

    const chatsFiltered = ArrayUtils.filterByName(selectedChat, searchTerm);
    
    

    return (
        <div className="size-full flex flex-col">
            <div className="pt-4 pb-2">
                <div className="mx-4">
                    <SearchField
                        term={searchTerm}
                        setTerm={setChatsTerms}
                        height="36px"
                        width="100%"
                        round
                        placeholder="Search for chats"
                    />
                </div>
            </div>
            <div className="flex-1 flex flex-col w-full overflow-y-scroll" style={{ maxHeight: 'calc(100vh - 108px)' }}>
                <div className="w-full flex flex-col">
                    <ChatList chats={chatsFiltered}></ChatList>
                </div>
            </div>
        </div>
    )
}

export default ChatsPage;