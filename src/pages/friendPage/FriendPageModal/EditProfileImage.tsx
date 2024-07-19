import Button from "../../../components/input/Button";
import { fetchUser, setCoverImageUser, setProfileUser } from "../../../store/thunks/userThunk";
import { useAppDispatch } from "../../../hook";
import { v4 as uuid} from "uuid"
import { uploadImg } from "../../../store/thunks/imagesThunk";

function EditProfileImage({setEditImg , image , isCoverImg} : 
    {setEditImg: React.Dispatch<React.SetStateAction<boolean>> ,image: File | null , isCoverImg?: boolean }){

    const dispatch = useAppDispatch()

    const profilePictureStyle = {
        borderRadius: "50%", width: "94px" , height: "94px"
    }

    async function uploadImage(){
        if(image){
            const filename = `public/${image?.name}_${uuid()}`
            if(isCoverImg){
                dispatch(setCoverImageUser(filename))
            }
            else{
                dispatch(setProfileUser(filename))
            }
            dispatch(uploadImg({filename,image}))
            setEditImg(false)
            dispatch(fetchUser())
    }
}

    return(
        <div className="flex flex-col items-center gap-1 z-20">
            { (image && !isCoverImg) && (<img className="object-cover" style={profilePictureStyle} src={URL.createObjectURL(image)} />)}
                    <div className="flex flex-row gap-x-2 absolute bottom-4">
                        <Button type="primary" onClick={uploadImage}>Save</Button>
                        <button 
                            className="text-white px-2 box-border rounded text-white h-10 cursor-pointer"  
                            style={{backgroundColor: "#575757"}}
                            onClick={() => setEditImg(false)}>
                            cancel
                        </button>
                    </div>
        </div>
    )
}

export default EditProfileImage;