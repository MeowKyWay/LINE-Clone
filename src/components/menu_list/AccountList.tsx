import { ReactNode } from "react";
import AccountItem from "../menu-item/AccountItem";
import { User } from "../../API";

function AccountList({ accounts, isRequest = false }: {
    accounts: User[]
    isRequest?: boolean
}) {
    // console.log(accounts);

    const renderAccount = accounts.filter(account => account).map((account) => {
        return (
            <AccountItem
                account={account}
                key={account.id}
                isRequest={isRequest}
            >
            </AccountItem>
        )
    }) as ReactNode[];
    

    return (
        <div className="w-full flex flex-col">
            {renderAccount}
        </div>
    )
}

export default AccountList;