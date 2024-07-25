import { useAppDispatch, useAppSelector } from "../../../hook";
import { useEffect, useState } from "react";
import Button from "../../../components/input/Button";
import { setStatusMessage , changeUserName, fetchUser } from "../../../store/thunks/userThunk";
import ProfilePicture from "../../../components/profile/ProfilePicture";


function EditProfileInfo({ setEditStatus, type } : { setEditStatus: React.Dispatch<React.SetStateAction<boolean>> , type: string})
{
    const [status , setStatus] = useState("")
    const dispatch = useAppDispatch()
    const currentUser = useAppSelector(state => state.user.currentUser)

    useEffect(() => {
        setDefaultInput()
    },[])

    function setDefaultInput(){
        if(type === "username"){
            setStatus(currentUser?.name as string)
        }
        else if(type === "statusMessage"){
            setStatus(currentUser?.statusMessage as string)
        }
    }

    const updateStatusMessage = () => {
        if(type === "statusMessage"){
            dispatch(setStatusMessage(status))
        }
        else if(type === "username"){
            dispatch(changeUserName(status))
        }
        setEditStatus(false)
        dispatch(fetchUser())
    }

    return(
        <div className="flex flex-col items-center gap-1 relative">
            {
                type === "username" && (<ProfilePicture src={currentUser?.image} size="94px"></ProfilePicture>)
            }
                    <div className="flex items-center">
                        <textarea 
                            className="bg-transparent text-white focus:outline-none h-44 w-64 text-center" 
                            placeholder={type === "statusMessage" ? "Enter a status message": ""} 
                            style={{caretColor: "white" ,resize: "none" }}
                            onChange={(e) => setStatus(e.target.value)}
                            value={status}
                            >
                        </textarea>
                    </div>
                    <div className="flex flex-row gap-x-2 absolute bottom-4 ">
                        <Button variant="primary" onClick={updateStatusMessage}>Save</Button>
                        <button 
                            className="text-white px-2 box-border rounded text-white h-10"  
                            style={{backgroundColor: "#575757"}}
                            onClick={() => setEditStatus(false)}>
                            cancel
                        </button>
                    </div>
        </div>
    )
}

export default EditProfileInfo;