import { ReactNode } from "react";
import AccountItem from "../menu-item/AccountItem";
import { AccountType } from "../../store/slice/friendsSlice";
import { GroupType } from "../../store/slice/groupsSlice";
import { FriendRecommendType } from "../../store/slice/friendRecommendSlice";

function AccountList({ accounts }: { accounts: AccountType[] | GroupType[] | FriendRecommendType[]}) {

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