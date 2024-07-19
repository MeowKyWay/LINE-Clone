import AccountList from "../../components/menu_list/AccountList"
import { useAppDispatch, useAppSelector } from "../../hook";
import { setFavoriteFriendListState } from "../../store/slice/statesSlice";
import ExpandListButton from "../../components/ExpandListButton";
import FetchFavoriteFriends from "../../components/api/fetch/FetchFavoriteFriends";


function FavoriteFriendList({ searchTerm }: { searchTerm: string }) {

    const dispatch = useAppDispatch();
    const friends = useAppSelector(state => state.friends.friends);
    const favoriteFriends = useAppSelector(state => state.friends.favoriteFriends) || [];
    const friendsFiltered = friends.data?.filter(friend => friend.name.toLowerCase().includes(searchTerm.toLowerCase())) || [];
    
    console.log("friendFiltered: " , friendsFiltered);
    console.log("favorite friend: ", favoriteFriends);
    
    const favoriteFriendListState = useAppSelector(state => state.states.favoriteFriendsListState);

    return (
        <div>
            <ExpandListButton
                label="Favorite"
                value={favoriteFriendListState}
                size={favoriteFriends.data?.length || 0}
                onClick={() => dispatch(setFavoriteFriendListState(!favoriteFriendListState))}
            ></ExpandListButton>
            {favoriteFriendListState && <AccountList accounts={favoriteFriends.data || []}></AccountList>}
            <FetchFavoriteFriends/>
        </div>
    )
}

export default FavoriteFriendList