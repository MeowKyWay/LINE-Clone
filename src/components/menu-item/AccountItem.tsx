import { GroupType } from "../../store/slice/groupsSlice";
import useTheme from "../../theme";
import ProfilePicture from "../ProfilePicture";
import type { User } from "../../API";
import { UserType } from "../../store/slice/userSlice";

function AccountItem({ value }: { value: UserType | User | GroupType }) {
    const theme = useTheme().currentTheme;

    const name = {
        color: theme.color.primary.text,
        fontSize: '12px',
    }

    const description = {
        color: theme.color.tertiary.text,
        fontSize: '10px',
    }

    return (
        <div className={"h-14 w-full cursor-pointer items-center"}>
            <style>
                {`
                .hover:hover {
                    background-color: ${theme.color.tertiary.background};
                }
                `}
            </style>
            <div className="h-14 w-full px-5 flex flex-row items-center hover">
                <ProfilePicture size="43px" /> {/*Todo add src*/}
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
            }
                </div>
            </div>
            
        </div>

    )
}

export default AccountItem;