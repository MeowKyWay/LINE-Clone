import AccountList from "../../components/menu_list/AccountList"
import { useAppDispatch, useAppSelector } from "../../hook";
import { setFriendListState } from "../../store/slice/statesSlice";
import ExpandListButton from "../../components/ExpandListButton";
import FetchFriends from "../../components/api/fetch/FetchFriends";
import { User } from "../../API";

function FriendList({ list, label }: { list: User[] , label:string}) {

    const dispatch = useAppDispatch();

    const friendListState = useAppSelector(state => state.states.friendListState);

    return (
        <div>
            <ExpandListButton
                label={label}
                value={friendListState}
                size={list.length}
                onClick={() => dispatch(setFriendListState(!friendListState))}
            ></ExpandListButton>
            {friendListState && <AccountList accounts={list}></AccountList>}
            <FetchFriends />
        </div>
    )
}

export default FriendList