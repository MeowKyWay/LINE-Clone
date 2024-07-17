import useTheme from "../../theme";
import ProfilePicture from "../ProfilePicture";
import type { User } from "../../API";
import { UserType } from "../../store/slice/userSlice";
import { MdPersonAddAlt1 } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../hook";
import { addFriend } from "../../store/thunks/friendsThunk";
import { setActiveChat } from "../../store/slice/statesSlice";


function AccountItem({ account, isRequest = false , onClick}: {
    account: UserType | User
    isRequest?: boolean
    onClick?: () => void | null
}) {

    const theme = useTheme().currentTheme;
    const dispatch = useAppDispatch();

    const chats = useAppSelector(state => state.chats.friendChats.data);
    
    const handleClick = () => {
        if (isRequest) return;
        if ("email" in account) return;

        dispatch(setActiveChat(account.id));
    }
    
    return (
        <div className={`h-14 w-full ${(isRequest || onClick) ? '' : 'cursor-pointer'} items-center`} onClick={handleClick}>
            <style>
                {`
                .hover:hover {
                    background-color: ${theme.color.tertiary.background};
                }
                `}
            </style>
            <div className="h-14 w-full pl-5 flex flex-row items-center hover">
                <ProfilePicture size="43px" src={account.image} onClick={onClick}/>
                <div className="flex flex-row ml-3 items-center" style={{ maxWidth: 'calc(100% - 83px)' }}>
                    <div>
                        <div className="overflow-hidden whitespace-nowrap text-ellipsis" style={{
                            color: theme.color.primary.text,
                            fontSize: '12px',
                        }}>
                            {account.name} {'memberCount' in account && `(${account.memberCount})`}
                        </div>
                        {'statusMessage' in account &&
                            <span
                                style={{
                                    color: theme.color.tertiary.text,
                                    fontSize: '10px',
                                }}
                                className="overflow-hidden whitespace-nowrap text-ellipsis">
                                {account.statusMessage}
                            </span>
                        }
                    </div>
                </div>
                {isRequest && "id" in account &&
                    <div className="flex-1 flex flex-row items-center justify-end">
                        <div className="size-8 grid place-items-center cursor-pointer"
                            onClick={() => dispatch(addFriend(account.id))}>
                            <MdPersonAddAlt1
                                size="22px"
                                style={{
                                    color: theme.color.tertiary.icon
                                }}>
                            </MdPersonAddAlt1>
                        </div>
                    </div>
                }
            </div>

        </div>

    )
}

export default AccountItem;