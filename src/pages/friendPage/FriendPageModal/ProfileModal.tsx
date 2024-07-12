import Modal from "../../../components/modal/Modal";
import ProfilePicture from "../../../components/ProfilePicture";
import { CiCamera } from "react-icons/ci";
import { useRef, useState } from "react";
import EditProfileImage from "./EditProfileImage";
import { useAppSelector } from "../../../hook";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import EditStatusMessage from "./EditStatusMessageModal";
import { IoPencilOutline } from "react-icons/io5";
import useTheme from "../../../theme";


function ProfileModal({onClose} : { onClose: () => void}){
    
    const imageFileInput = useRef<HTMLInputElement | null>(null)
    const [image , setImage] = useState<File | null>(null)
    const [editImg , setEditImg] = useState(false)
    const [editStatus , setEditStatus] = useState(false)
    const currentUser = useAppSelector(state => state.user.currentUser)

    const theme = useTheme().currentTheme;
    const textStyle = {
        color: theme.color.primary.text
    }


    const profilePictureStyle = {
        borderRadius: "50%", width: "94px" , height: "94px"
    }

    function onImageChange(e: React.ChangeEvent<HTMLInputElement>){
        const fileUploaded = e.target.files ? e.target.files[0] : null;
        if(!fileUploaded) return;
        setEditImg(true)
        setImage(fileUploaded)
    }

    async function uploadImageRef(){
        if(imageFileInput.current){
            imageFileInput.current.click()
        }
    }

    

    return (
        <Modal onClose={onClose} label={"profile page"} height={"516px"} width={"312px"}>
            <div className="relative h-full w-full">
                {
                    currentUser?.image && (
                        <StorageImage
                            path={currentUser?.image}
                            alt="profile"
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        />
                    )
                }
                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full gap-4 bg-opacity-75 bg-black">
                    <div>
                        { (image && editImg) && <img style={profilePictureStyle} src={URL.createObjectURL(image)} />}
                        { (!editImg && !editStatus ) && (<ProfilePicture size="94px" src={currentUser?.image}/>)}
                        
                        <input type="file" ref={imageFileInput} onChange={onImageChange} className="absolute w-0 h-0"></input>
                        <div className="relative bottom-4 left-16 bg-white border border-gray-600 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
                            <CiCamera onClick={uploadImageRef}></CiCamera>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        { editImg ? ( <EditProfileImage setEditImg={setEditImg} image={image}></EditProfileImage>)
                        : editStatus ? ( <EditStatusMessage setEditStatus={setEditStatus}></EditStatusMessage>)
                        : (     <div className="flex flex-col items-center">
                                    <div className="text-xl" style={textStyle}>{currentUser?.name}</div>
                                    <div className="flex flex-row cursor-pointer" onClick={() => setEditStatus(true)}>
                                        <div className="text-xs" style={textStyle}>Enter a status message.</div>
                                        <IoPencilOutline style={textStyle} className="ml-1"></IoPencilOutline>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </Modal>

    )
}

export default ProfileModal;