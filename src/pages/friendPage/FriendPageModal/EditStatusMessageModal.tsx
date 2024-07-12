import { useAppDispatch } from "../../../hook";
import { useState } from "react";
import Button from "../../../components/input/Button";
import { setStatusMessage } from "../../../store/thunks/userThunk";


function EditStatusMessage({ setEditStatus } :{ setEditStatus: React.Dispatch<React.SetStateAction<boolean>>})
{
    const [status , setStatus] = useState("")
    const dispatch = useAppDispatch()

    const updateStatusMessage = () => {
        dispatch(setStatusMessage(status))
    }

    return(
        <div className="flex flex-col items-center gap-1">
                    <div className="flex flex-row gap-x-2">
                        <Button type="primary" onClick={updateStatusMessage}>Save</Button>
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

export default EditStatusMessage;