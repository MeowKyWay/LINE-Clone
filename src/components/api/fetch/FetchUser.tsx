import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { fetchUser } from "../../../store/thunks/userThunk";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../../RoutePath";

function FetchUser() {

    const dispatch = useAppDispatch();

    const user = useAppSelector(state => state.user);

    const navigate = useNavigate();
    
    useEffect(() => {
        const fetch = async () => {
            await dispatch(fetchUser());
            if (!user.currentUser || user.error) navigate(RoutePath.LOGIN);
        }
        if (user.currentUser || user.error) return;
        fetch();
        console.log('Fetch User')
    })

    return <div className="hidden" />
}

export default FetchUser;