import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { fetchUser } from "../../../store/thunks/userThunk";

function UserFetch() {

    const dispatch = useAppDispatch();

    const user = useAppSelector(state => state.user);

    useEffect(() => {
        if (user.currentUser || user.error) return;
        console.log('fetchUser')
        dispatch(fetchUser());
    })

    return <div className="hidden" />
}

export default UserFetch;