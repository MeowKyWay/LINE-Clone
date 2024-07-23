import AccountList from "../../components/menu_list/AccountList"
import { useAppDispatch, useAppSelector } from "../../hook";
import { setFriendListState , setFavoriteFriendListState} from "../../store/slice/statesSlice";
import ExpandListButton from "../../components/ExpandListButton";
import FetchFriends from "../../components/api/fetch/FetchFriends";
import { User } from "../../API";

function FriendList({ list, label }: { list: User[] , label:string }) {

    const dispatch = useAppDispatch();
    const friendListState = useAppSelector(state => state.states.friendListState);
    const favoriteFriendsState = useAppSelector(state => state.states.favoriteFriendsListState)
    console.log(label);
    
    const handleExpandClick = () => {
        if (label === "Favorites") {
            dispatch(setFavoriteFriendListState(!favoriteFriendsState));
        } else {
            dispatch(setFriendListState(!friendListState));
        }
    };

    return (
        <div>
            <ExpandListButton
                label={label}
                value={friendListState}
                size={list.length}
                onClick={handleExpandClick}
            ></ExpandListButton>
            {friendListState && <AccountList accounts={list}></AccountList>}
            <FetchFriends />
        </div>
    )
}

export default FriendList