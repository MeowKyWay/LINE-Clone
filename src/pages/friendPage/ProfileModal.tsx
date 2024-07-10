import Modal from "../../components/Modal/Modal"
import ProfilePicture from "../../components/ProfilePicture";
import { useAppSelector } from "../../hook";
import useTheme from "../../theme";
import { CiCamera } from "react-icons/ci";
import { useRef, useState } from "react";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import Button from "../../components/input/Button";

function ProfileModal({onClose} : { onClose: () => void}){
    
    const theme = useTheme().currentTheme;
    const currentUser = useAppSelector(state => state.user.currentUser)
    const imageFileInput = useRef<HTMLInputElement | null>(null)
    const [image , setImage] = useState<File | null>(null)
    const [editImg , setEditImg] = useState(false)
    console.log("image: ", image)
    console.log("editImg: ", editImg)

    const textStyle = {
        color: theme.color.primary.text
    }

    function onImageChange(e: React.ChangeEvent<HTMLInputElement>){
        const fileUploaded = e.target.files ? e.target.files[0] : null;
        if(!fileUploaded) return;
        setEditImg(true)
        setImage(fileUploaded)
    }

    async function uploadImage(){
        if(imageFileInput.current){
            imageFileInput.current.click()
        }
    }

    return (
        <Modal onClose={onClose} label={"profile page"}  height={"516px"} width={"312px"}>
            <div className="flex flex-col items-center justify-center h-full w-full gap-4">
                <div>
                    {
                        (image && editImg) ? <ProfilePicture size="94px" src={URL.createObjectURL(image)}/>
                        :
                        <ProfilePicture size="94px"></ProfilePicture>
                    }
                    
                    <input type="file" ref={imageFileInput} onChange={onImageChange} className="absolute w-0 h-0"></input>
                    <div className="relative bottom-4 left-16 bg-white border border-gray-600 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
                        <CiCamera onClick={uploadImage}></CiCamera>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    {
                        editImg ?
                    
                    <div className="flex flex-row gap-x-2">
                        <Button type="primary">Save</Button>
                        <button 
                            className="text-white px-2 box-border rounded text-white h-10"  
                            style={{backgroundColor: "#575757"}}
                            onClick={() => setEditImg(false)}>
                            cancel
                        </button>
                    </div>
                    :
                    <><div className="text-sm" style={textStyle}>{currentUser?.name}</div><div className="text-xs" style={textStyle}>status message...</div></>
                    }
                </div>
            </div>
        </Modal>
    )
}

export default ProfileModal;