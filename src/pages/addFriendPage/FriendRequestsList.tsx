import AccountList from "../../components/menu_list/AccountList"
import { useAppDispatch, useAppSelector } from "../../hook";
import { useEffect, useState } from "react";
import { fetchFriendRequest } from "../../store/thunks/friendsThunk";
import ExpandListButton from "../../components/ExpandListButton";
import { setFriendRequestListState } from "../../store/slice/statesSlice";
import { Subscription } from 'rxjs'
import { generateClient } from "aws-amplify/api";
import { onCreateUserFriend } from "../../graphql/subscriptions";
import { UserFriend } from "../../API";

function FriendRequestsList() {

    const dispatch = useAppDispatch();

    const friendRequests = useAppSelector(state => state.friends.friendRequests);
    console.log(friendRequests)

    const friendRequestListState = useAppSelector(state => state.states.friendRequestListState);
    const user = useAppSelector(state => state.user);
    const client = generateClient()
    const [ newRequest , setNewRequest ] = useState<UserFriend>()

    let subOnUpdateFriendRequest: Subscription

    function setUpSubscription(){
        if (!user) return;
        subOnUpdateFriendRequest = client.graphql({
            query: onCreateUserFriend,
        }).subscribe({
            next: ({data}) => {
                const request = data.onCreateUserFriend as UserFriend
                setNewRequest(request)
                dispatch(fetchFriendRequest(user.currentUser?.lineID as string))
            }
        })
    }

    console.log("newRequest: ",newRequest)

    useEffect(() => {
        setUpSubscription();
        return () => {
            subOnUpdateFriendRequest.unsubscribe();
        }
    },[])

    useEffect(() => {
        if (friendRequests.data || friendRequests.error) return;
        //console.log('fetchFriendRequests')
        dispatch(fetchFriendRequest(user.currentUser?.lineID as string));
    }, [friendRequests.data, friendRequests.error, dispatch , newRequest]);

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