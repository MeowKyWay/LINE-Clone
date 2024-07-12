import AccountList from "../../components/menu_list/AccountList"
import { useAppDispatch, useAppSelector } from "../../hook";
import { setFriendListState } from "../../store/slice/statesSlice";
import ExpandListButton from "../../components/ExpandListButton";
import FetchFriend from "../../components/api/fetch/FetchFriend";

function FriendList({searchTerm}: {searchTerm: string}) {

    const dispatch = useAppDispatch();

    const friends = useAppSelector(state => state.friends.friends);
    const friendsFiltered = friends.data?.filter(friend => friend.name.toLowerCase().includes(searchTerm.toLowerCase())) || [];

    const friendListState = useAppSelector(state => state.states.friendListState);

    return (
        <div>
            <ExpandListButton
                label="Friends"
                value={friendListState}
                size={friendsFiltered.length}
                onClick={() => dispatch(setFriendListState(!friendListState))}
            ></ExpandListButton>
            {friendListState && <AccountList accounts={friendsFiltered} isFriend></AccountList>}
            <FetchFriend />
        </div>
    )
}

export default FriendList