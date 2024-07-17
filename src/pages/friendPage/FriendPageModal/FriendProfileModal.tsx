import Modal from "../../../components/modal/Modal";
import ProfilePicture from "../../../components/ProfilePicture";
import ProfileCover from "../../../components/ProfileCover";
import { UserType } from "../../../store/slice/userSlice";


function FriendProfileModal({onClose , friend} : { onClose: () => void , friend : UserType}){
    return (
        <Modal onClose={onClose} label={"profile page"} height={"516px"} width={"312px"}>
            <div className="relative h-full w-full">
                <ProfileCover friend={friend} className="h-full w-full opacity-50"/>
                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full gap-4">

                    <div className="flex flex-row right-4 absolute top-4 gap-x-2">
                    </div>

                    <div className="flex flex-col items-center gap-2">
                          <div className="flex flex-col items-center">
                                    <div className="relative mb-4">
                                        <ProfilePicture size="94px" src={friend?.image}/>
                                    </div>
                                    <div className="text-xl text-white">{friend?.name}</div>
                                    <div className="flex flex-row cursor-pointer">
                                        <div className="text-xs text-white">
                                            {friend?.statusMessage ? `${friend.statusMessage}`: ''}
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </Modal>

    )
}

export default FriendProfileModal;