import { GroupType } from "../../store/slice/groupsSlice";
import useTheme from "../../theme";
import ProfilePicture from "../ProfilePicture";
import { FriendRecommendType } from "../../store/slice/friendRecommendSlice";
import { IoPersonAdd } from "react-icons/io5";
import { addUserFriend } from "../../store/thunks/addUserFriend";
import { getCurrentUser } from "aws-amplify/auth";
import { useAppDispatch , useAppSelector } from "../../hook";
import { User, UserFriend } from "../../API";
import { AuthUser } from "aws-amplify/auth";

function AccountItem({ value }: { value: User |UserFriend | GroupType | FriendRecommendType | AuthUser}) {

    const dispatch = useAppDispatch();
    const friendList = useAppSelector(state => state.friends.friendList);
    const friendRecommendList = useAppSelector(state => state.friendsRecommend.friendRecommendList);


    const handleClick = () => {
        if(value as FriendRecommendType)
        {
            dispatch(addUserFriend(userId,value.id))
        }
    }

    const theme = useTheme().currentTheme;

    const name = {
        color: theme.color.primary.text,
        fontSize: '12px',
    }

    const icon = {
        color: theme.color.primary.text,
        fontSize: '20px'
    }

    const description = {
        color: theme.color.tertiary.text,
        fontSize: '10px',
    }

    return (
        <div className={`h-14 w-full ${value as FriendRecommendType ?'' : 'cursor-pointer'} items-center`}>
            <style>
                {`
                .hover:hover {
                    background-color: ${theme.color.tertiary.background};
                }
                `}
            </style>
            <div className="h-14 w-full px-5 flex flex-row items-center hover">
                <ProfilePicture size="43px" src={value.profilePicture} />
                <div className="relative flex flex-row ml-3 items-center" style={{ maxWidth: 'calc(100% - 83px)' }}>
                    <div>
                        <div className="overflow-hidden whitespace-nowrap text-ellipsis" style={name}>
                            {value.name} {'memberCount' in value && `(${value.memberCount})`}
                        </div>
                        {'statusMessage' in value && <span
                            style={description}
                            className="overflow-hidden whitespace-nowrap text-ellipsis">
                            {value.statusMessage}
                        </span>}

                        {('addByStatus' in value)  && 
                                <span
                                    style={description}
                                    className="overflow-hidden whitespace-nowrap text-ellipsis flex flex-row">
                                    {value.addByStatus}   
                                </span>
                        }
                    </div>
                    {
                (value as FriendRecommendType) && 
                    <button  onClick={handleClick}>
                        <IoPersonAdd className="absolute left-44 bottom-1" style={icon}></IoPersonAdd>
                    </button>
                    
            }
                </div>
            </div>
            
        </div>

    )
}

export default AccountItem;