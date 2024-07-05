import { GroupType } from "../../store/slice/groupsSlice";
import useTheme from "../../theme";
import ProfilePicture from "../ProfilePicture";
import { IoPersonAdd } from "react-icons/io5";
import type { User, UserFriend } from "../../API";


function AccountItem({ value }: { value: User | UserFriend | GroupType }) {

    //const friendList = useAppSelector(state => state.friends.friendList);
    //const friendRecommendList = useAppSelector(state => state.friendsRequest.friendRequestList);



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
                    </div>
                    {
                (value) && 
                    <button >
                        <IoPersonAdd className="absolute left-44 bottom-1" style={icon}></IoPersonAdd>
                    </button>
                    
            }
                </div>
            </div>
            
        </div>

    )
}

export default AccountItem;