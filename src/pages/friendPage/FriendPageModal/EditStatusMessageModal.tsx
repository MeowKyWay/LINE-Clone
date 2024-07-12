import { useAppDispatch } from "../../../hook";
import { useState } from "react";
import Button from "../../../components/input/Button";
import { setStatusMessage } from "../../../store/thunks/userThunk";


function EditStatusMessage({ setEditStatus } : { setEditStatus: React.Dispatch<React.SetStateAction<boolean>>})
{
    const [status , setStatus] = useState("")
    const dispatch = useAppDispatch()

    const updateStatusMessage = () => {
        dispatch(setStatusMessage(status))
        setEditStatus(false)
    }

    return(
        <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center">
                        <textarea 
                            className="bg-transparent text-white focus:outline-none h-44 w-64 text-center" 
                            placeholder="Enter a status message" 
                            style={{caretColor: "white" ,resize: "none" }}
                            onChange={(e) => setStatus(e.target.value)}></textarea>
                    </div>
                    <div className="flex flex-row gap-x-2 absolute bottom-4">
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