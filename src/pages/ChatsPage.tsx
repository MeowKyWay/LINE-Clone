import SearchField from "../components/input/SearchField";
import { setChatsTerms } from "../store/slice/termsSlice";
import ChatList from "../components/menu_list/ChatList";
import ArrayUtils from "../utilities/ArrayUtils";
import { useAppSelector } from "../hook";

function ChatsPage() {

    const searchTerm = useAppSelector(state => state.terms.chatsTerm);
    const chatFolderState = useAppSelector(state => state.states.chatFolderState);

    const chats = useAppSelector(state => state.chats.chatList);
    const chatSorted = chats.slice().sort((a, b) => b.lastUpdate - a.lastUpdate);

    let selectedChat;
    switch (chatFolderState) {
        case 'Friends':
            selectedChat = chatSorted.slice().filter(chat => chat.type === 'friend');
            break;
        case 'Groups':
            selectedChat = chatSorted.slice().filter(chat => chat.type === 'group');
            break;
        default:
            selectedChat = chatSorted.slice();
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