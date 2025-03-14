import SearchField from "../components/input/SearchField";
import { setChatsTerms } from "../store/slice/termsSlice";
import ChatList from "../components/menu_list/ChatList";
import { useAppDispatch, useAppSelector } from "../hook";

function ChatsPage() {

    const dispatch = useAppDispatch();

    const searchTerm = useAppSelector(state => state.terms.chatsTerm);
    const currentUser = useAppSelector(state => state.user.currentUser);

    // console.log(currentUser);

    const friendChats = useAppSelector(state => state.chats.friendChats.data)?.filter(
        chat => chat.userID === currentUser?.lineID
    );

    // console.log(friendChats);

    const chatsFiltered = friendChats?.filter(chat => {
        // console.log(chat.friend?.name.toLowerCase(), searchTerm.toLowerCase());
        return chat.friend?.name.toLowerCase().includes(searchTerm.toLowerCase())
    });

    // console.log(chatsFiltered);

    return (
        <div className="size-full flex flex-col">
            <div className="pt-4 pb-2">
                <div className="mx-4">
                    <SearchField
                        value={searchTerm}
                        onChange={(value: string) => dispatch(setChatsTerms(value))}
                        height="36px"
                        width="100%"
                        round
                        placeholder="Search for chats"
                    />
                </div>
            </div>
            <div className="flex-1 flex flex-col w-full overflow-y-scroll" style={{ maxHeight: 'calc(100vh - 108px)' }}>
                <div className="w-full flex flex-col">
                    <ChatList chats={chatsFiltered || []}></ChatList>
                </div>
            </div>
        </div>
    )
}

export default ChatsPage;