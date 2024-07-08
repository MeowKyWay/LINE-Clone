import { FaUserFriends } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { useAppSelector , useAppDispatch} from "../../hook";
import useTheme from "../../theme";
import { useEffect , useState } from "react";
import FriendSearchModalContent from "../ModalPage/FriendSearchModalContent";
import { fetchUser } from "../../store/thunks/fetchUser";
import FriendRequestList from "./FriendRequestList";



function AddFriendsPage () {

    const [showModal , setShowModal] = useState(false)
    const [searchTerm , setSearchTerm] = useState('');

    const dispatch = useAppDispatch()

    const user = useAppSelector(state => state.user);
    
    useEffect(() => {
        if (user.currentUser || user.error) return;
        dispatch(fetchUser());
    }, [user.currentUser, user.error, dispatch]);

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
                        <FriendRequestList searchTerm={searchTerm}></FriendRequestList>
                    
            </div>
            </div>
            </div>

    )
}

export default AddFriendsPage;
