import AccountItem from "../components/menu-item/AccountItem";
import SearchField from "../components/SearchField";
import AccountList from "../components/menu_list/AccountList";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import useTheme from "../theme";
import { setFriendListState, setGroupListState } from "../store/slice/statesSlice";
import { setFriendsTerms } from "../store/slice/termsSlice";
import { useEffect } from "react";
import ArrayUtils from "../utilities/ArrayUtils";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hook";

function FriendsPage() {

    const user = useAppSelector(state => state.user.currentUser);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname != '/friends') {
            navigate('/friends');
        }
    }, [navigate, location.pathname])

    const dispatch = useAppDispatch();
    const theme = useTheme().currentTheme;    
    
    const style = {
        color: theme.color.tertiary.text,
        fontSize: '12px'
    }

    const friends = useAppSelector(state => state.friends.friendList);
    const groups = useAppSelector(state => state.groups.groupList);

    const groupListState = useAppSelector(state => state.states.groupListState);
    const friendListState = useAppSelector(state => state.states.friendListState);
    const searchTerm = useAppSelector(state => state.terms.friendsTerm);    
    
    const friendsFiltered = ArrayUtils.filterByName(friends, searchTerm);
    const groupsFiltered = ArrayUtils.filterByName(groups, searchTerm);



    const setGroupList = (state: boolean) => {
        dispatch(setGroupListState(state));
    }
    const setFriendList = (state: boolean) => {
        dispatch(setFriendListState(state));
    }

    const handleTermChange = () => {
        dispatch(setGroupListState(true));
        dispatch(setFriendListState(true));
    }

    return (
        <div className="size-full flex flex-col">
            <div className="pt-8 pb-2">
                <div className="mx-4">
                    <SearchField
                        term={searchTerm}
                        setTerm={setFriendsTerms}
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
                    <AccountItem value={user} />
                    <div className="w-full h-8 flex flex-row items-center font-light px-5" style={style}>
                        <button onClick={() => setGroupList(!groupListState)} className="w-full h-4 flex flex-row items-center">
                            <span className="flex-1 text-left">Groups {groupsFiltered.length}</span>
                            {(groupListState && <MdExpandLess size={20} />) || (!groupListState) && <MdExpandMore size={20} />}
                        </button>
                    </div>
                    {groupListState && <AccountList accounts={groupsFiltered}></AccountList>}
                    <div className="w-full h-8 flex flex-row items-center font-light px-5" style={style}>
                        <button onClick={() => setFriendList(!friendListState)} className="w-full h-4 flex flex-row items-center">
                            <span className="flex-1 text-left">Friends {friendsFiltered.length}</span>
                            {(friendListState && <MdExpandLess size={20} />) || (!friendListState) && <MdExpandMore size={20} />}
                        </button>
                    </div>
                    {friendListState && <AccountList accounts={friendsFiltered}></AccountList>}

                </div>
            </div>


        </div >
    )
}

export default FriendsPage;