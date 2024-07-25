import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import ProfileCover from "./ProfileCover";
import ProfilePicture from "./ProfilePicture";
import { useAppDispatch, useAppSelector } from "../../hook";
import { addFavoriteFriend, removeFavoriteFriend } from "../../store/thunks/friendsThunk";
import { setSettingModalState } from "../../store/slice/statesSlice";
import { User } from "../../API";

function AccountProfile() {

    const [isFavorite, setIsFavorite] = useState<boolean>();

    const dispatch = useAppDispatch();
    const friend = useAppSelector((state) => state.states.accountModalState as User);
    const currentUser = useAppSelector((state) => state.user.currentUser);

    const favoriteFriends = useAppSelector((state) => state.friends.favoriteFriends);

    // console.log(friend)

    useEffect(() => {
        if (favoriteFriends.data?.find(item => item.id === friend.id)) {
            setIsFavorite(true);
        }
    }, [favoriteFriends.data, friend.id])

    const toggleFavorite = async () => {
        //addFavoriteFriend
        if (!isFavorite) {
            dispatch(addFavoriteFriend(friend.id))
            setIsFavorite(!isFavorite)
            return;
        }
        //removeFavoriteFriend
        dispatch(removeFavoriteFriend(friend.id))
        setIsFavorite(!isFavorite)
    }

    return (
        <div className="relative flex flex-col h-full w-full">
            <ProfileCover image={friend.coverImage as string} className="opacity-50" />
            <div className="z-10 flex flex-col items-center size-full">
                <div style={{
                    height: "180px",
                    width: "100%"
                }}>
                    <div className="flex flex-row w-full p-4">
                        <div className="flex-1"></div>
                        {currentUser?.id !== friend?.id &&
                            <div onClick={toggleFavorite}>
                                {isFavorite ? <FaStar className="cursor-pointer" style={{ color: "#06c755" }} />
                                    : <FaRegStar className="cursor-pointer text-white" />}
                            </div>
                        }
                        {currentUser?.id === friend?.id &&
                            <div className="flex flex-row ">
                                <CiSettings onClick={() => dispatch(setSettingModalState(true))} className="cursor-pointer text-white" size="20px"></CiSettings>
                            </div>
                        }
                    </div>
                </div>
                <ProfilePicture size="94px" src={friend?.image} />
                <span className="text-xl text-white">{friend?.name}</span>
                <span className="text-xs text-white mt-4">{friend?.statusMessage}</span>
                {currentUser?.id !== friend?.id &&
                    <div className="flex flex-row items-center text-white mt-8">
                        <div className="flex flex-col items-center cursor-pointer gap-1">
                            <BsChatDotsFill size={"20px"} />
                            <div className="font-light">Chat</div>
                        </div>
                    </div>
                }
            </div>
        </div>

    )
}

export default AccountProfile;