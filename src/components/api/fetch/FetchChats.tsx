import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { fetchFriendChats } from "../../../store/thunks/chatsThunk";

function FetchChats() {

    const dispatch = useAppDispatch();

    const chats = useAppSelector(state => state.chats);
    const user = useAppSelector(state => state.user);

    useEffect(() => {
        if (chats.friendChats.data || chats.friendChats.data) return;
        if (!user.currentUser) return;
        console.log('Fetch Friend Chats')
        dispatch(fetchFriendChats(user.currentUser?.lineID));
    }, [dispatch, user.currentUser, chats.friendChats.data]);

    return <div className="hidden" />
}

export default FetchChats;