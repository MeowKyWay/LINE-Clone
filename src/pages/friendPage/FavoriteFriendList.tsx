import AccountList from "../../components/menu_list/AccountList"
import { useAppDispatch, useAppSelector } from "../../hook";
import { setFavoriteFriendListState } from "../../store/slice/statesSlice";
import ExpandListButton from "../../components/ExpandListButton";
import FetchFavoriteFriends from "../../components/api/fetch/FetchFavoriteFriends";


function FavoriteFriendList() {

    const dispatch = useAppDispatch();

    const favoriteFriends = useAppSelector(state => state.friends.favoriteFriends) || [];

    
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