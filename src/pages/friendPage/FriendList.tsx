import AccountList from "../../components/menu_list/AccountList"
import { useAppDispatch, useAppSelector } from "../../hook";
import { useEffect } from "react";
import { fetchUserFriends } from "../../store/thunks/friendsThunk";
import { setFriendListState } from "../../store/slice/statesSlice";
import ExpandListButton from "../../components/ExpandListButton";

function FriendList({searchTerm}: {searchTerm: string}) {

    const dispatch = useAppDispatch();

    const friends = useAppSelector(state => state.friends.friends);
    const friendsFiltered = friends.data?.filter(friend => friend.name.toLowerCase().includes(searchTerm.toLowerCase())) || [];

    const friendListState = useAppSelector(state => state.states.friendListState);

    useEffect(() => {
        if (friends.data || friends.error) return;
        console.log('fetchUserFriends')
        dispatch(fetchUserFriends());
    }, [friends.data, friends.error, dispatch]);

    return (
        <div>
            <ExpandListButton
                label="Friends"
                value={friendListState}
                size={friendsFiltered.length}
                onClick={() => dispatch(setFriendListState(!friendListState))}
            ></ExpandListButton>
            {friendListState && <AccountList accounts={friendsFiltered}></AccountList>}
        </div>
    )
}

export default FriendList