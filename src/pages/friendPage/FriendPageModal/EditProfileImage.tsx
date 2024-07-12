import Button from "../../../components/input/Button";
import { uploadData } from "aws-amplify/storage";
import { setProfileUser } from "../../../store/thunks/userThunk";
import { useAppDispatch } from "../../../hook";
import { v4 as uuid} from "uuid"

function EditProfileImage({setEditImg , image} : {setEditImg: React.Dispatch<React.SetStateAction<boolean>> ,image: File | null}){

    const dispatch = useAppDispatch()

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
        <div className="flex flex-col items-center gap-1">
                    <div className="flex flex-row gap-x-2">
                        <Button type="primary" onClick={uploadImage}>Save</Button>
                        <button 
                            className="text-white px-2 box-border rounded text-white h-10"  
                            style={{backgroundColor: "#575757"}}
                            onClick={() => setEditImg(false)}>
                            cancel
                        </button>
                    </div>
        </div>
    )
}

export default EditProfileImage;