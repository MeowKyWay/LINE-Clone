import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { fetchFriendRequest } from "../../../store/thunks/friendsThunk";

function FetchFriendRequest() {

    const dispatch = useAppDispatch();

    const friendRequests = useAppSelector(state => state.friends.friendRequests);

    useEffect(() => {
        if (friendRequests.data || friendRequests.error) return;
        console.log('fetch Friend requests')
        dispatch(fetchFriendRequest());
    }, [friendRequests.data, friendRequests.error, dispatch]);

    return <div className="hidden" />
}

export default FetchFriendRequest;