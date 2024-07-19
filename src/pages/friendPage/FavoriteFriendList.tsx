import AccountList from "../../components/menu_list/AccountList"
import { useAppDispatch, useAppSelector } from "../../hook";
import { setFriendListState } from "../../store/slice/statesSlice";
import ExpandListButton from "../../components/ExpandListButton";
import FetchFriends from "../../components/api/fetch/FetchFriends";

function FavoriteFriendList({ searchTerm }: { searchTerm: string }) {

    const dispatch = useAppDispatch();
    const friends = useAppSelector(state => state.friends.friends);
    const favoriteFriends = useAppSelector(state => state.friends.favoriteFriends);
    const friendsFiltered = friends.data?.filter(friend => friend.name.toLowerCase().includes(searchTerm.toLowerCase())) || [];
    
    console.log("friendFiltered: " , friendsFiltered);
    console.log("favorite friend: ", favoriteFriends);
    
    const friendListState = useAppSelector(state => state.states.friendListState);
    const favoriteFriendListState = useAppSelector(state => state.states.favoriteFriendsListState);

    return (
        <div>
            <ExpandListButton
                label="Favorite"
                value={favoriteFriendListState}
                size={friendsFiltered.length}
                onClick={() => dispatch(setFriendListState(!friendListState))}
            ></ExpandListButton>
            {friendListState && <AccountList accounts={friends.data || []}></AccountList>}
            <FetchFriends />
        </div>
    )
}

export default FavoriteFriendList