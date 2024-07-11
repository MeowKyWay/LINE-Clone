import Modal from "../../components/Modal/Modal"
import ProfilePicture from "../../components/ProfilePicture";
import { CiCamera } from "react-icons/ci";
import { useRef, useState } from "react";
import EditProfileImage from "./EditProfileImage";


function ProfileModal({onClose} : { onClose: () => void}){
    
    const imageFileInput = useRef<HTMLInputElement | null>(null)
    const [image , setImage] = useState<File | null>(null)
    const [editImg , setEditImg] = useState(false)
    
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
        <Modal onClose={onClose} label={"profile page"}  height={"516px"} width={"312px"}>
            <div className="flex flex-col items-center justify-center h-full w-full gap-4">
                <div>
                    { (image && editImg) && <img style={profilePictureStyle} src={URL.createObjectURL(image)}/>}
                    { (!editImg) && (<ProfilePicture size="94px"/>)}
                    
                    <input type="file" ref={imageFileInput} onChange={onImageChange} className="absolute w-0 h-0"></input>
                    <div className="relative bottom-4 left-16 bg-white border border-gray-600 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
                        <CiCamera onClick={uploadImageRef}></CiCamera>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <EditProfileImage editImg={editImg} setEditImg={setEditImg} image={image}></EditProfileImage>
                </div>
            </div>
        </Modal>
    )
}

export default ProfileModal;