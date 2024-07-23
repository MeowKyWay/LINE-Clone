import Modal from "../../../components/modal/Modal";
import ProfilePicture from "../../../components/ProfilePicture";
import ProfileCover from "../../../components/ProfileCover";
import { UserType } from "../../../store/slice/userSlice";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { useAppSelector } from "../../../hook";
import { addFavoriteFriend, fetchUserFriend, removeFavoriteFriend } from "../../../store/thunks/friendsThunk";
import { useAppDispatch } from "../../../hook";
import { UserFriend } from "../../../API";



function FriendProfileModal({onClose , friend } : { onClose: () => void , friend : UserType}){
    const currentUser = useAppSelector(state => state.user.currentUser)
    const [isFavorite , setIsFavorite] = useState<boolean>(false)
    const [userFriend , setUserFriend] = useState<UserFriend | null>(null)
    console.log("isFavorite: " , isFavorite);    
    
    const userFriendID = currentUser?.lineID + ":" + friend.id
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function setIsFavoriteState() {
            const action = await dispatch(fetchUserFriend(userFriendID));
            const fetchedUserFriend = action.payload as UserFriend;
            setUserFriend(fetchedUserFriend);
            if (fetchedUserFriend && fetchedUserFriend.favorite) {
                setIsFavorite(fetchedUserFriend.favorite);
            }
        }
        setIsFavoriteState();
    }, [ dispatch ]);
    
    async function updateFavoriteStatus(){
        if(userFriend && !userFriend?.favorite ){
            dispatch(addFavoriteFriend(userFriend))
            setIsFavorite(!isFavorite)
        }
        else if(userFriend){
            dispatch(removeFavoriteFriend(userFriend))
            setIsFavorite(!isFavorite)
        }
    }
    

    return (
        <Modal onClose={onClose} label={"profile page"} height={"516px"} width={"312px"}>
            <div className="relative h-full w-full">
                <ProfileCover friend={friend} className="h-full w-full opacity-50"/>
                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full gap-4">

                    <div className="flex flex-row right-4 absolute top-4 gap-x-2" onClick={updateFavoriteStatus}>
                        { isFavorite ? 
                        <FaStar className="cursor-pointer" style={{color: "#06c755"}}/> :
                        <FaRegStar className="cursor-pointer" style={{color: "white"}}/> }
                    </div>

                    <div className="flex flex-col items-center gap-2">
                          <div className="flex flex-col items-center">
                                    <div className="relative mb-4">
                                        <ProfilePicture size="94px" src={friend?.image}/>
                                    </div>
                                    <div className="text-xl text-white">{friend?.name}</div>
                                    <div className="flex flex-row">
                                        <div className="text-xs text-white">
                                            {friend?.statusMessage ? `${friend.statusMessage}`: ''}
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div className="flex flex-row gap-x-4 items-center absolute bottom-16 jusitfy-center" style={{color: "white"}}>
                         <div className="flex flex-col items-center cursor-pointer gap-y-2 ml-4">
                            <BsChatDotsFill/>
                            <div className="font-light">Chat</div>
                        </div> 

                        <div className="flex flex-col items-center cursor-pointer gap-y-2">
                            <IoCallSharp/>
                            <div>Voice call</div>
                        </div>   

                        <div className="flex flex-col items-center cursor-pointer gap-y-2">
                            <FaVideo/>
                            <div>Video call</div>
                        </div>     
                    </div>
                </div>
            </div>
        </Modal>

    )
}

export default FriendProfileModal;