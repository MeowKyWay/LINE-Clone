import AccountRequestList from "../../components/menu_list/AccountRequestList";
import { useAppDispatch, useAppSelector } from "../../hook";
import { useEffect } from "react";
import { fetchFriendRequest } from "../../store/thunks/friendsThunk";
import ExpandListButton from "../../components/ExpandListButton";
import { setFriendRequestListState } from "../../store/slice/statesSlice";
import { useAddFriendSubscription } from "../../store/subscriptions/userFriendSubscription";

function FriendRequestsList() {

    const dispatch = useAppDispatch();

    const friendRequests = useAppSelector(state => state.friends.friendRequests);
    console.log(friendRequests)

    const friendRequestListState = useAppSelector(state => state.states.friendRequestListState);
    const user = useAppSelector(state => state.user);

    const dispatchRequest = () => {
        dispatch(fetchFriendRequest());
    }

    useAddFriendSubscription(user.currentUser?.lineID as string , dispatchRequest)
 
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
            {friendRequestListState && <AccountRequestList accounts={friendRequests.data || []}></AccountRequestList>}
        </div>
    )
}

export default FriendRequestsList