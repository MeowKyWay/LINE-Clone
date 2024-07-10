import AccountList from "../../components/menu_list/AccountList"
import { useAppDispatch, useAppSelector } from "../../hook";
import { useEffect, useRef } from "react";
import { fetchFriendRequest } from "../../store/thunks/friendsThunk";
import ExpandListButton from "../../components/ExpandListButton";
import { setFriendRequestListState } from "../../store/slice/statesSlice";
import { Subscription } from "rxjs"
import { fetchUser } from "../../store/thunks/userThunk";
import { addFriendRequest } from "../../store/slice/friendsSlice";
import { friendRequestSubscription } from "../../store/subscriptions/userFriendSubscription";

function FriendRequestsList() {

    const dispatch = useAppDispatch();

    const friendRequests = useAppSelector(state => state.friends.friendRequests);

    const friendRequestListState = useAppSelector(state => state.states.friendRequestListState);
    const user = useAppSelector(state => state.user);

    const subscription = useRef<Subscription | null>(null);

    useEffect(() => {
        if (user.currentUser || user.error) return;
        console.log('fetchUser')
        dispatch(fetchUser());
    }, [dispatch, user.currentUser, user.error])

    useEffect(() => {
        if (subscription.current)
            subscription.current.unsubscribe();

        const newSubscription = friendRequestSubscription(user.currentUser?.lineID as string, (data) => {
            dispatch(addFriendRequest(data.onCreateUserFriend?.user));
        })

        subscription.current = newSubscription;

        return () => {
            if (newSubscription) {
                newSubscription.unsubscribe();
            }
        };

    }, [dispatch, user.currentUser?.lineID]);

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