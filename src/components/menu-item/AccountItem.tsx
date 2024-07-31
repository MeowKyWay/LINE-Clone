import useTheme from "../../theme";
import ProfilePicture from "../profile/ProfilePicture";
import { MdPersonAddAlt1 } from "react-icons/md";
import { useAppDispatch } from "../../hook";
import { addFriend } from "../../store/thunks/friendsThunk";
import { setAccountModalState, setActiveChat } from "../../store/slice/statesSlice";
import { UserType } from "../../store/slice/userSlice";
import { User } from "../../API";

function AccountItem({ account, isRequest = false, onClick }: {
    account: UserType | User
    isRequest?: boolean
    onClick?: () => void | null
}) {

    const theme = useTheme().currentTheme;

    const dispatch = useAppDispatch();

    const handleClick = () => {
        if (isRequest) return;
        if ("email" in account) return;
        dispatch(setActiveChat(account.id));
    }


    return (
        <div>
            <div className={`h-14 w-full ${(isRequest || onClick) ? '' : 'cursor-pointer'} items-center`} onClick={handleClick}>

                <style>
                    {`
                .hover:hover {
                    background-color: ${theme.color.tertiary.background};
                }
                `}
                </style>
                <div className="h-14 w-full pl-5 flex flex-row items-center hover">
                    <ProfilePicture size="43px" src={account.image} onClick={() => dispatch(setAccountModalState(account as User))} />
                    <div className="flex flex-row ml-3 items-center" style={{ maxWidth: 'calc(100% - 83px)' }}>
                        <div>
                            <div className="overflow-hidden whitespace-nowrap text-ellipsis" style={{
                                color: theme.color.primary.text,
                                fontSize: '12px',
                            }}>
                                {account.name} {'memberCount' in account && `(${account.memberCount})`}
                            </div>
                            {'statusMessage' in account &&
                                <div
                                    style={{
                                        color: theme.color.tertiary.text,
                                        fontSize: '10px',
                                    }}
                                    className="overflow-hidden whitespace-nowrap text-ellipsis">
                                    {account.statusMessage}
                                </div>
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
        </div>
    )
}

export default AccountItem;