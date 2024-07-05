import AccountItem from "../../components/menu-item/AccountItem";
import SearchField from "../../components/input/SearchField";
import AccountList from "../../components/menu_list/AccountList";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import useTheme from "../../theme";
import { setFriendListState, setGroupListState } from "../../store/slice/statesSlice";
import { setFriendsTerms } from "../../store/slice/termsSlice";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook";
import { fetchUser } from "../../store/thunks/fetchUser";
import FriendList from "./FriendList";

function FriendsPage() {

    const dispatch = useAppDispatch()

    const theme = useTheme().currentTheme;

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname != '/friends') {
            navigate('/std/friends');
        }
    }, [navigate, location.pathname])

    const user = useAppSelector(state => state.user);

    useEffect(() => {
        if (user.currentUser || user.error) return;
        dispatch(fetchUser());
    }, [user.currentUser, user.error, dispatch]);

    const groupListState = useAppSelector(state => state.states.groupListState);
    const searchTerm = useAppSelector(state => state.terms.friendsTerm);

    const groups = useAppSelector(state => state.groups.groupList);
    const groupsFiltered = groups.filter(group => group.name.toLowerCase().includes(searchTerm.toLowerCase())) || [];

    const currentUser = useAppSelector(state => state.user.currentUser)

    const setGroupList = (state: boolean) => {
        dispatch(setGroupListState(state));
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
                    {currentUser && <AccountItem value={currentUser} />}
                    <div
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
                    {groupListState && <AccountList accounts={groupsFiltered}></AccountList>}
                    <FriendList searchTerm={searchTerm} />
                </div>
            </div>


        </div >
    )
}

export default FriendsPage;