import Modal from "../../components/Modal/Modal"
import ProfilePicture from "../../components/ProfilePicture";
import { useAppSelector } from "../../hook";
import useTheme from "../../theme";
import { CiCamera } from "react-icons/ci";
import { useRef, useState } from "react";
import Button from "../../components/input/Button";
import { uploadData } from "aws-amplify/storage";
import { v4 as uuid} from "uuid"
import { setProfileUser ,  } from "../../store/thunks/userThunk";
import { useAppDispatch } from "../../hook";
import { IoPencilOutline } from "react-icons/io5";

function ProfileModal({onClose} : { onClose: () => void}){
    
    const theme = useTheme().currentTheme;
    const currentUser = useAppSelector(state => state.user.currentUser)
    console.log(currentUser?.image)
    const imageFileInput = useRef<HTMLInputElement | null>(null)
    const [image , setImage] = useState<File | null>(null)
    const [editImg , setEditImg] = useState(false)
    const dispatch = useAppDispatch()
    
    console.log("editImg: " , editImg)
    console.log("currentUser: ", currentUser)
    console.log("image: ",image)
    console.log("userProfile: ", currentUser?.image)

    const profilePictureStyle = {
        borderRadius: "50%", width: "94px" , height: "94px"
    }

    const textStyle = {
        color: theme.color.primary.text
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


    async function uploadImage(){
        if(image){
            const filename = `public/${image.name}_${uuid()}`
            dispatch(setProfileUser(filename))

              try {
                const result = await uploadData({
                  path: filename, 
                  data: image,
                }).result;
                console.log('Succeeded: ', result);
              } catch (error) {
                console.log('Error : ', error);
              }
            setEditImg(false)
        }
    }

    return (
        <Modal onClose={onClose} label={"profile page"}  height={"516px"} width={"312px"}>
            <div className="flex flex-col items-center justify-center h-full w-full gap-4">
                <div>
                    {
                        (image && editImg) && <img style={profilePictureStyle} src={URL.createObjectURL(image)}/>
                    }
                    
                    {
                        (!editImg) && (
                            <ProfilePicture size="94px"></ProfilePicture>
                        )
                    }
                    
                    <input type="file" ref={imageFileInput} onChange={onImageChange} className="absolute w-0 h-0"></input>
                    <div className="relative bottom-4 left-16 bg-white border border-gray-600 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
                        <CiCamera onClick={uploadImageRef}></CiCamera>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    {
                        editImg ?
                    
                    <div className="flex flex-row gap-x-2">
                        <Button type="primary" onClick={uploadImage}>Save</Button>
                        <button 
                            className="text-white px-2 box-border rounded text-white h-10"  
                            style={{backgroundColor: "#575757"}}
                            onClick={() => setEditImg(false)}>
                            cancel
                        </button>
                    </div>
                    :
                    <>
                    <div className="text-xl" style={textStyle}>{currentUser?.name}</div>
                    <div className="flex flex-row cursor-pointer">
                        <div className="text-xs" style={textStyle}>Enter a status message.</div>
                        <IoPencilOutline style={textStyle} className="ml-1"></IoPencilOutline>
                    </div>
                    </>
                    }
                </div>
            </div>
        </Modal>
    )
}

export default ProfileModal;