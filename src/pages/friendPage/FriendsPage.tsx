import AccountItem from "../../components/menu-item/AccountItem";
import SearchField from "../../components/input/SearchField";
import { setFriendListState, setGroupListState } from "../../store/slice/statesSlice";
import { setFriendsTerms } from "../../store/slice/termsSlice";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook";
import { useState } from "react";
import FriendList from "./FriendList";
import ProfileModal from "./FriendPageModal/ProfileModal";

function FriendsPage() {

    const dispatch = useAppDispatch()
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname != '/friends') {
            navigate('/std/friends');
        }
    }, [navigate, location.pathname]);
    const searchTerm = useAppSelector(state => state.terms.friendsTerm);
    const friends = useAppSelector(state => state.friends.friends);
    const favoriteFriends = useAppSelector(state => state.friends.favoriteFriends)
    const friendsFiltered = friends.data?.filter(friend => friend.name.toLowerCase().includes(searchTerm.toLowerCase())) || [];
    const favoriteFriendsFiltered = favoriteFriends.data?.filter(favoriteFriends => favoriteFriends.name.toLowerCase().includes(searchTerm.toLowerCase())) || [];


    const user = useAppSelector(state => state.user);
    // const groupListState = useAppSelector(state => state.states.groupListState);


    // const groups = useAppSelector(state => state.groups.groupList);
    // const groupsFiltered = groups?.filter(group => group.name.toLowerCase().includes(searchTerm.toLowerCase())) || [];

    // const setGroupList = (state: boolean) => {
    //     dispatch(setGroupListState(state));
    // }

    const handleTermChange = (value: string) => {
        dispatch(setGroupListState(true));
        dispatch(setFriendListState(true));
        dispatch(setFriendsTerms(value));
    }

    return (
        <div className="size-full flex flex-col">
            {showModal && <ProfileModal onClose={() => setShowModal(false)}></ProfileModal>}
            <div className="pt-8 pb-2">
                <div className="mx-4">
                    <SearchField
                        value={searchTerm}
                        onChange={handleTermChange}
                        height="36px"
                        width="100%"
                        round
                        placeholder="Search by display name"
                    />
                </div>
            </div>
            <div className="flex-1 flex flex-col w-full overflow-y-scroll" style={{ maxHeight: 'calc(100vh - 76px)' }}>
                <div className="w-full flex flex-col">

                    {user.currentUser &&
                        <div>
                            <AccountItem account={user.currentUser} onClick={() => setShowModal(true)}/>
                        </div>
                    }

                    {/* <div
                        className="w-full h-8 flex flex-row items-center font-light px-5"
                        style={{
                            color: theme.color.tertiary.text,
                            fontSize: '12px'
                        }}>
                        <button onClick={() => setGroupList(!groupListState)} className="w-full h-4 flex flex-row items-center">
                            <span className="flex-1 text-left">Groups {groupsFiltered.length}</span>
                            {(groupListState && <MdExpandLess size={20} />) || (!groupListState) && <MdExpandMore size={20} />}
                        </button>
                    </div>
                    {groupListState && <AccountList accounts={groupsFiltered}></AccountList>} */}
                    <FriendList list={favoriteFriendsFiltered} label="Favorites"></FriendList>
                    <FriendList list={friendsFiltered} label="Friends"/>
                    
                </div>
            </div>


        </div >
    )
}

export default FriendsPage;