import AccountList from "../../components/menu_list/AccountList"
import { useAppDispatch, useAppSelector } from "../../hook";
import ExpandListButton from "../../components/ExpandListButton";
import { setFriendRequestListState } from "../../store/slice/statesSlice";
import FetchFriendRequests from "../../components/api/fetch/FetchFriendRequests";

function FriendRequestsList() {

    const dispatch = useAppDispatch();

    const friendRequests = useAppSelector(state => state.friends.friendRequests);

    const friendRequestListState = useAppSelector(state => state.states.friendRequestListState);

    return (
        <div>
            <ExpandListButton
                label="Friend recommendations"
                value={friendRequestListState}
                size={friendRequests.data?.length || 0}
                onClick={() => dispatch(setFriendRequestListState(!friendRequestListState))}
            ></ExpandListButton>
            {friendRequestListState && <AccountList accounts={friendRequests.data || []} isRequest></AccountList>}
            <FetchFriendRequests />
        </div>
    )
}

export default FriendRequestsList