import { ReactNode } from "react";
import AccountItem from "../menu-item/AccountItem";
import { AccountType } from "../../store/slice/friendsSlice";
import { GroupType } from "../../store/slice/groupsSlice";
import { FriendRecommendType } from "../../store/slice/friendRecommendSlice";
import { User } from "../../API";

function AccountList({ accounts }: { accounts: User[] | GroupType[] | FriendRecommendType[]}) {

    const renderAccount = accounts.map((account) => {
        return <AccountItem value={account} key={account.id}></AccountItem>
    }) as ReactNode[];

    return (
        <div className="w-full flex flex-col">
            {renderAccount}
        </div>
    )
}

export default AccountList;