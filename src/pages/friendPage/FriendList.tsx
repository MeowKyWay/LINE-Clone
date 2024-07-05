import { MdExpandLess, MdExpandMore } from "react-icons/md"
import AccountList from "../../components/menu_list/AccountList"
import { useAppDispatch, useAppSelector } from "../../hook";
import { useEffect } from "react";
import { fetchUserFriends } from "../../store/thunks/friendsThunk";
import useTheme from "../../theme";
import { setFriendListState } from "../../store/slice/statesSlice";

function FriendList({searchTerm}: {searchTerm: string}) {

    const dispatch = useAppDispatch();
    const theme = useTheme().currentTheme;

    const friends = useAppSelector(state => state.friends.friends);
    const friendsFiltered = friends.data?.filter(friend => friend.name.toLowerCase().includes(searchTerm.toLowerCase())) || [];

    const friendListState = useAppSelector(state => state.states.friendListState);

    useEffect(() => {
        if (friends.data || friends.error) return;
        console.log('fetchUserFriends')
        dispatch(fetchUserFriends());
    }, [friends.data, friends.error, dispatch]);

    const setFriendList = (state: boolean) => {
        dispatch(setFriendListState(state));
    }

    return (
        <div>
            <div
                className="w-full h-8 flex flex-row items-center font-light px-5"
                style={{
                    color: theme.color.tertiary.text,
                    fontSize: '12px'
                }}>
                <button onClick={() => setFriendList(!friendListState)} className="w-full h-4 flex flex-row items-center">
                    <span className="flex-1 text-left">Friends {friendsFiltered.length}</span>
                    {(friendListState && <MdExpandLess size={20} />) || (!friendListState) && <MdExpandMore size={20} />}
                </button>
            </div>
            {friendListState && <AccountList accounts={friendsFiltered}></AccountList>}
        </div>
    )
}

export default FriendList