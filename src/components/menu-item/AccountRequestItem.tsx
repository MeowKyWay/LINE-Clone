import { GroupType } from "../../store/slice/groupsSlice";
import useTheme from "../../theme";
import ProfilePicture from "../ProfilePicture";
import type { User } from "../../API";
import { MdPersonAddAlt1 } from "react-icons/md";
import { useAppDispatch } from "../../hook";
import { addFriend } from "../../store/thunks/friendsThunk";

function AccountRequestItem({ value }: { value: User | GroupType }) {
    const theme = useTheme().currentTheme;
    const dispatch = useAppDispatch();

    const name = {
        color: theme.color.primary.text,
        fontSize: '12px',
    }

    const description = {
        color: theme.color.tertiary.text,
        fontSize: '10px',
    }

    const icon = {
        color : theme.color.primary.icon
    }

    const handleAddFriend = async () => {
        await dispatch(addFriend(value.id as string));
    }

    return (
        <div className={"h-14 w-full items-center"}>
            <style>
                {`
                .hover:hover {
                    background-color: ${theme.color.tertiary.background};
                }
                `}
            </style>
            <div className="h-14 w-full px-5 flex flex-row items-center hover relative">
                <ProfilePicture size="43px" /> 
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
                    
                </div>
                <MdPersonAddAlt1 
                    className="absolute right-0 cursor-pointer mr-4" 
                    size="20px" 
                    style={icon} 
                    onClick={handleAddFriend}>    
                </MdPersonAddAlt1>
            </div>
            
        </div>

    )
}

export default AccountRequestItem;