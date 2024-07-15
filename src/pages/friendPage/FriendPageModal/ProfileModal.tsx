import Modal from "../../../components/modal/Modal";
import ProfilePicture from "../../../components/ProfilePicture";
import { useState } from "react";
import EditProfileImage from "./EditProfileImage";
import { useAppSelector } from "../../../hook";
import EditProfileInfo from "./EditStatusMessage";
import { IoPencilOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import UploadImageButton from "../../../components/input/UploadImgButton";
import ProfileCover from "../../../components/ProfileCover";
import ProfileSettingModal from "./ProfileSettingModal";


function ProfileModal({onClose} : { onClose: () => void}){
    
    const [image , setImage] = useState<File | null>(null)
    const [coverImg, setCoverImg] = useState<File | null>(null)
    const [editImg , setEditImg] = useState(false)
    const [editCoverImg , setEditCoverImg] = useState(false)
    const [editStatus , setEditStatus] = useState(false)
    const [setting, setSetting] = useState(false)
    const currentUser = useAppSelector(state => state.user.currentUser)
    

    const profilePictureStyle = {
        borderRadius: "50%", width: "94px" , height: "94px"
    }

    function onImageChange(e: React.ChangeEvent<HTMLInputElement>){
        const fileUploaded = e.target.files ? e.target.files[0] : null;
        if(!fileUploaded) return;
        setImage(fileUploaded)
        setEditImg(true)
    }

    
    function onCoverImageChange(e: React.ChangeEvent<HTMLInputElement>){
        const fileUploaded = e.target.files ? e.target.files[0] : null;
        if(!fileUploaded) return;
        setCoverImg(fileUploaded)
        setEditCoverImg(true)
    }

    return (
        <Modal onClose={onClose} label={"profile page"} height={"516px"} width={"312px"}>
            {
                setting ? <ProfileSettingModal setSetting={setSetting} setEditStatus={setEditStatus} editStatus={editStatus}></ProfileSettingModal>
             :
            <div className="relative h-full w-full">
                <ProfileCover editCoverImg={editCoverImg} coverImg={coverImg} className="h-full w-full"></ProfileCover>
                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full gap-4 bg-opacity-75 bg-black">

                    <div className="flex flex-row right-4 absolute top-4 gap-x-2">
                        <UploadImageButton onImageChange={onCoverImageChange}></UploadImageButton>
                        <CiSettings onClick={() => setSetting(true)} className="cursor-pointer text-white" size="20px"></CiSettings>
                    </div>

                    <div className="relative">
                        { (image && editImg) && <img className="object-cover" style={profilePictureStyle} src={URL.createObjectURL(image)} />}
                        { (!editStatus && !editCoverImg && !editImg) && (<ProfilePicture size="94px" src={currentUser?.image}/>)}
                        { (!editStatus && !editCoverImg) && (<UploadImageButton className="absolute top-20 left-16" onImageChange={onImageChange}></UploadImageButton>)}
                    </div>

                    <div className="flex flex-col items-center gap-2">

                        {/* edit page */}
                        { editImg ? ( <EditProfileImage setEditImg={setEditImg} image={image}></EditProfileImage>)
                        : editCoverImg ? ( <EditProfileImage setEditImg={setEditCoverImg} image={coverImg} isCoverImg/>)
                        : editStatus ? ( <EditProfileInfo setEditStatus={setEditStatus} type="statusMessage"></EditProfileInfo>)
                        

                        //profileModal default page
                        : (     <div className="flex flex-col items-center">
                                    <div className="text-xl text-white">{currentUser?.name}</div>
                                    <div className="flex flex-row cursor-pointer" onClick={() => setEditStatus(true)}>
                                        <div className="text-xs text-white">
                                            {currentUser?.statusMessage ? `${currentUser.statusMessage}`: 'Enter a status message'}
                                        </div>
                                        <IoPencilOutline className="ml-1 text-white"></IoPencilOutline>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        }
        </Modal>

    )
}

export default ProfileModal;