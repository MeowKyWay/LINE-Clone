import { GroupType } from "../../store/slice/groupsSlice";
import useTheme from "../../theme";
import ProfilePicture from "../ProfilePicture";
import type { User } from "../../API";
import { UserType } from "../../store/slice/userSlice";
import { MdPersonAddAlt1 } from "react-icons/md";
import { useAppDispatch } from "../../hook";
import { addFriend } from "../../store/thunks/friendsThunk";

function AccountItem({ value, isRequest = false }: {
    value: UserType | User | GroupType
    isRequest?: boolean
}) {
    const theme = useTheme().currentTheme;
    const dispatch = useAppDispatch();

    return (
        <div className={`h-14 w-full ${isRequest ? '' : 'cursor-pointer'} items-center`}>
            <style>
                {`
                .hover:hover {
                    background-color: ${theme.color.tertiary.background};
                }
                `}
            </style>
            <div className="h-14 w-full pl-5 flex flex-row items-center hover">
                <ProfilePicture size="43px" /> {/*Todo add src*/}
                <div className="flex flex-row ml-3 items-center" style={{ maxWidth: 'calc(100% - 83px)' }}>
                    <div>
                        <div className="overflow-hidden whitespace-nowrap text-ellipsis" style={{
                            color: theme.color.primary.text,
                            fontSize: '12px',
                        }}>
                            {value.name} {'memberCount' in value && `(${value.memberCount})`}
                        </div>
                        {'statusMessage' in value &&
                            <span
                                style={{
                                    color: theme.color.tertiary.text,
                                    fontSize: '10px',
                                }}
                                className="overflow-hidden whitespace-nowrap text-ellipsis">
                                {value.statusMessage}
                            </span>
                        }
                    </div>
                </div>
                {isRequest && "id" in value &&
                    <div className="flex-1 flex flex-row items-center justify-end">
                        <div className="size-8 grid place-items-center cursor-pointer"
                            onClick={() => dispatch(addFriend(value.id))}>
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