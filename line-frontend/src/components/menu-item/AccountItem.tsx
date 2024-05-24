import { AccountType } from "../../store/slice/friendsSlice";
import { GroupType } from "../../store/slice/groupsSlice";
import useTheme from "../../theme";
import ProfilePicture from "../ProfilePicture";

function AccountItem({ value }: { value: AccountType | GroupType }) {

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
        <div className="h-14 w-full cursor-pointer">
            <style>
                {`
                .hover:hover {
                    background-color: ${theme.color.tertiary.background};
                }
                `}
            </style>
            <div className="h-14 w-full px-5 flex flex-row items-center hover">
                <ProfilePicture size="43px" src={value.profilePicture} />
                <div className="flex flex-col ml-3" style={{ maxWidth: 'calc(100% - 83px)' }}>
                    <span className="overflow-hidden whitespace-nowrap text-ellipsis" style={name}>
                        {value.name} {'memberCount' in value && `(${value.memberCount})`}
                    </span>
                    {'statusMessage' in value && <span
                        style={description}
                        className="overflow-hidden whitespace-nowrap text-ellipsis">
                        {value.statusMessage}
                    </span>}
                </div>
            </div>
        </div>

    )
}

export default AccountItem;