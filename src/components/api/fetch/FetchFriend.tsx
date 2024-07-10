import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { fetchUserFriends } from "../../../store/thunks/friendsThunk";

function FetchFriend() {

    const dispatch = useAppDispatch();

    const friends = useAppSelector(state => state.friends.friends);

    useEffect(() => {
        if (friends.data || friends.error) return;
        console.log('Fetch Friends')
        dispatch(fetchUserFriends());
    }, [friends.data, friends.error, dispatch]);

    return <div className="hidden" />
}

export default FetchFriend