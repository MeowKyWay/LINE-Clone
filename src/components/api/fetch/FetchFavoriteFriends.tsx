import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { fetchFavoriteFriends } from "../../../store/thunks/friendsThunk";

function FetchFavoriteFriends() {

    const dispatch = useAppDispatch();

    const favoriteFriends = useAppSelector(state => state.friends.favoriteFriends);
    
    useEffect(() => {
        if (favoriteFriends.data || favoriteFriends.error) return;
        console.log('Fetch favoriteFriends')
        dispatch(fetchFavoriteFriends());
    }, [favoriteFriends.data, favoriteFriends.error, dispatch]);

    return <div className="hidden" />
}

export default FetchFavoriteFriends;