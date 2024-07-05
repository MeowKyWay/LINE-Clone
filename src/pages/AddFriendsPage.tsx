import { FaUserFriends } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { useAppSelector , useAppDispatch} from "../hook";
import AccountList from "../components/menu_list/AccountList";
import { setFriendRecommendState } from "../store/slice/statesSlice";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import useTheme from "../theme";
import { withAuthenticator , WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { useEffect , useState } from "react";
import { fetchFriendRequest } from "../store/thunks/friendsThunk";
import FriendSearchModalContent from "./ModalPage/FriendSearchModalContent";

interface Props extends WithAuthenticatorProps {
    isPassedToWithAuthenticator: boolean;
}

function AddFriendsPage ({isPassedToWithAuthenticator , user} : Props) {

    if (!isPassedToWithAuthenticator) {
        throw new Error(`isPassedToWithAuthenticator was not provided`);
    }

    const friendRecommendState = useAppSelector(state => state.states.friendRecommendState)
    const friendRecommendList = useAppSelector(state => state.friendsRequest.friendRequestList)
    const [showModal , setShowModal] = useState(false)
    const [searchTerm , setSearchTerm] = useState('');

    const dispatch = useAppDispatch()

    useEffect(() => {
        if(user?.username){
            dispatch(fetchFriendRequest(user.username))
        }
    } , [user?.username])

    const setFriendRecommend = (state: boolean) => {
        dispatch(setFriendRecommendState(state))
    }
    
    const handleAddFriendModal = () => {
        setShowModal(true)
        console.log(showModal)
    }



    const themeContext = useTheme();
    const theme = themeContext.currentTheme;
    const circleStyle = {
        borderRadius: '50%',
        width: '32px',
        height: '32px',
        backgroundColor: theme.color.primary.circleColor,
    }

    const iconsStyle = {
        color: theme.color.primary.text
    }

    const style = {
        color: theme.color.tertiary.text,
        fontSize: '12px'
    }

    return (
        <div>
            {
                showModal && (
                    <FriendSearchModalContent
                    showModal={showModal}
                    onClose={() => setShowModal(false)}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                )
            }
            <div className="flex flex-col w-full" >
                <div id="w1" className="flex flex-row cursor-pointer h-12 mt-6" onClick={handleAddFriendModal}>
                    <style>
                    {`
                    #w1:hover {
                        background-color: ${theme.color.tertiary.background};
                    }
                    `}
                    </style>
                    <div className="relative bg-gray-200 flex items-center justify-center ml-6 mt-2"
                     style={circleStyle}>
                        <IoSearchOutline style={iconsStyle}/>
                    </div>
                    <p className="ml-3 mt-2" style={iconsStyle}>Friend search</p>
                </div>
                <div id="w2" className="flex flex-row cursor-pointer h-12">
                <style>
                    {`
                    #w2:hover {
                        background-color: ${theme.color.tertiary.background};
                    }
                    `}
                    </style>
                    <div className="relative bg-gray-200 flex items-center justify-center ml-6 mt-2"
                     style={circleStyle}>
                        <FaUserFriends style={iconsStyle}></FaUserFriends>
                    </div>
                    <p className="ml-3 mt-2" style={iconsStyle}>Create a group</p>
                </div>
                <div id="w3" className="flex flex-row cursor-pointer h-12">
                <style>
                    {`
                    #w3:hover {
                        background-color: ${theme.color.tertiary.background};
                    }
                    `}
                    </style>
                    <div className="relative bg-gray-200 flex items-center justify-center ml-6 mt-2"
                     style={circleStyle}>
                        <IoCreateOutline style={iconsStyle}></IoCreateOutline>
                    </div>
                    <p className="ml-3 mt-2" style={iconsStyle}>Create OpenChat</p>
                </div>
            </div>
            
            <div className="flex-1 flex flex-col w-full overflow-y-scroll" style={{ maxHeight: 'calc(100vh - 170px)' }}>
                <div className="w-full flex flex-col">
                    <div className="w-full h-8 flex flex-row items-center font-light px-5" style={style}>
                        <button onClick={() => setFriendRecommend(!friendRecommendState)} className="w-full h-4 flex flex-row items-center">
                            <span className="flex-1 text-left">Friend recommendations {friendRecommendList.length}</span>
                            {(friendRecommendState && <MdExpandLess size={20} />) || (!friendRecommendState) && <MdExpandMore size={20} />}
                        </button>
                    </div>
                    {friendRecommendState && <AccountList accounts={friendRecommendList}></AccountList>}
            </div>
            </div>
            </div>

    )
}

export default withAuthenticator(AddFriendsPage);

export async function getStaticProps() {
    return {
      props: {
        isPassedToWithAuthenticator: true,
      },
}
}