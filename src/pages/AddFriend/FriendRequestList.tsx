import { MdExpandLess, MdExpandMore } from "react-icons/md"
import AccountList from "../../components/menu_list/AccountList"
import { useAppDispatch, useAppSelector } from "../../hook";
import { useEffect, useState } from "react";
import { fetchFriendRequest } from "../../store/thunks/friendsThunk";
import useTheme from "../../theme";
import { setFriendListState } from "../../store/slice/statesSlice";
import { fetchUser } from "../../store/thunks/fetchUser";
import { Subscription } from 'rxjs';
import { generateClient } from "aws-amplify/api";
import { onCreateUserFriend, onUpdateUserFriend } from "../../graphql/subscriptions";
import { UserFriend } from "../../API";

function FriendRequestList({searchTerm}: {searchTerm: string}) {

    const dispatch = useAppDispatch();
    const theme = useTheme().currentTheme;
    const [ newRequest , setNewRequest ] = useState<UserFriend | null>()

    const friendsRequest = useAppSelector(state => state.friends.friendRequests);
    console.log("friendRequest: ",friendsRequest)
    const friendsFiltered = friendsRequest.data?.filter(friend => friend.name.toLowerCase().includes(searchTerm.toLowerCase())) || [];
    const friendListState = useAppSelector(state => state.states.friendListState);
    console.log("friendListState: ",friendListState)
    const user = useAppSelector(state => state.user);
    console.log(user.currentUser?.lineID)

    const client = generateClient({authMode: "apiKey"})

    let subOnUpdateFriendRequest: Subscription

    function setUpSubscription(){
        if (!user) return;
        subOnUpdateFriendRequest = client.graphql({
            query: onCreateUserFriend,
            variables: {
                filter: {
                    friendID: {
                        eq: user.currentUser?.lineID
                    },
                    status: {
                        eq: "pending"
                    }
                }
            }
        }).subscribe({
            next: ({data}) => {
                const request = data.onCreateUserFriend as UserFriend
                setNewRequest(request)
                dispatch(fetchFriendRequest(user.currentUser?.lineID as string))
                console.log("newRequest: ",newRequest)
            }
        })
    }

    useEffect(() => {
        setUpSubscription();
        return() => {
            subOnUpdateFriendRequest.unsubscribe();
        }
    },[])

    useEffect(() => {
        if (user.currentUser || user.error) return;
        dispatch(fetchUser());
    }, [user.currentUser, user.error, dispatch , newRequest]);

    const currentUser = useAppSelector(state => state.user.currentUser)



    useEffect(() => {
        if (friendsRequest.data || friendsRequest.error) return;
        console.log('fetchUserFriendsRequest')
        dispatch(fetchFriendRequest(currentUser?.lineID as string));
    }, [friendsRequest.data, friendsRequest.error, dispatch , newRequest]);

    const setFriendList = (state: boolean) => {
        dispatch(setFriendListState(state));
    }

    return (
        <div>
            <div
                className="w-full h-8 flex flex-row items-center font-light px-5"
                style={{
                    color: theme.color.tertiary.text,
                    fontSize: '12px'
                }}>
                <button onClick={() => setFriendList(!friendListState)} className="w-full h-4 flex flex-row items-center">
                    <span className="flex-1 text-left">Friends recommendations {friendsFiltered.length}</span>
                    {(friendListState && <MdExpandLess size={20} />) || (!friendListState) && <MdExpandMore size={20} />}
                </button>
            </div>
            {friendListState && <AccountList accounts={friendsFiltered}></AccountList>}
        </div>
    )
}

export default FriendRequestList;