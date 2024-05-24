import { ReactNode } from "react";
import AccountItem from "../menu-item/AccountItem";
import { AccountType } from "../../store/slice/friendsSlice";
import { GroupType } from "../../store/slice/groupsSlice";

function AccountList({ accounts }: { accounts: AccountType[] | GroupType[] }) {

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