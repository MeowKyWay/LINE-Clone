import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { fetchUser } from "../../../store/thunks/userThunk";

function FetchUser() {

    const dispatch = useAppDispatch();

    const user = useAppSelector(state => state.user);
    console.log("user", user);
    
    

    useEffect(() => {
        if (user.currentUser || user.error) return;
        console.log('Fetch User')
        dispatch(fetchUser());
    })

    return <div className="hidden" />
}

export default FetchUser;