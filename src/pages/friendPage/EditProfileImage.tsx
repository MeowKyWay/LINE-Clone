import Button from "../../components/input/Button";
import { IoPencilOutline } from "react-icons/io5";
import useTheme from "../../theme";
import { uploadData } from "aws-amplify/storage";
import { setProfileUser } from "../../store/thunks/userThunk";
import { useAppDispatch, useAppSelector } from "../../hook";
import { v4 as uuid} from "uuid"

function EditProfileImage({editImg, setEditImg , image} : {editImg : boolean,setEditImg: React.Dispatch<React.SetStateAction<boolean>> ,image: File | null}){

    const theme = useTheme().currentTheme;
    const dispatch = useAppDispatch()
    const currentUser = useAppSelector(state => state.user.currentUser)
    const textStyle = {
        color: theme.color.primary.text
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

    return(
        <div>
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
    )
}

export default EditProfileImage;