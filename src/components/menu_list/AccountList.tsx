import { ReactNode } from "react";
import AccountItem from "../menu-item/AccountItem";
import { GroupType } from "../../store/slice/groupsSlice";
import { User } from "../../API";

function AccountList({ accounts, isRequest = false }: {
    accounts: User[] | GroupType[]
    isRequest?: boolean
}) {

    const renderAccount = accounts.map((account) => {
        return <AccountItem value={account} key={account.id} isRequest={isRequest} ></AccountItem>
    }) as ReactNode[];

    return (
        <div className="w-full flex flex-col">
            {renderAccount}
        </div>
    )
}

export default AccountList;