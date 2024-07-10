import { ReactNode } from "react";
import AccountRequestItem from "../menu-item/AccountRequestItem";
import { GroupType } from "../../store/slice/groupsSlice";
import { User } from "../../API";

function AccountRequestList({ accounts }: { accounts: User[] | GroupType[] }) {

    const renderAccount = accounts.map((account) => {
        return <AccountRequestItem value={account} key={account.id}></AccountRequestItem>
    }) as ReactNode[];

    return (
        <div className="w-full flex flex-col">
            {renderAccount}
        </div>
    )
}

export default AccountRequestList;