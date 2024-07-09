import AccountList from "../../components/menu_list/AccountList"
import { useAppDispatch, useAppSelector } from "../../hook";
import { useEffect } from "react";
import { fetchFriendRequest } from "../../store/thunks/friendsThunk";
import ExpandListButton from "../../components/ExpandListButton";
import { setFriendRequestListState } from "../../store/slice/statesSlice";

function FriendRequestsList() {

    const dispatch = useAppDispatch();

    const friendRequests = useAppSelector(state => state.friends.friendRequests);

    const friendRequestListState = useAppSelector(state => state.states.friendRequestListState);

    useEffect(() => {
        if (friendRequests.data || friendRequests.error) return;
        console.log('fetchFriendRequests')
        dispatch(fetchFriendRequest());
    }, [friendRequests.data, friendRequests.error, dispatch]);

    return (
        <div>
            <ExpandListButton
                label="Friend recommendations"
                value={friendRequestListState}
                size={friendRequests.data?.length || 0}
                onClick={() => dispatch(setFriendRequestListState(!friendRequestListState))}
            ></ExpandListButton>
            {friendRequestListState && <AccountList accounts={friendRequests.data || []}></AccountList>}
        </div>
    )
}

export default FriendRequestsList