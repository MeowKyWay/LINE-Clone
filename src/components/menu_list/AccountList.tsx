import { ReactNode } from "react";
import AccountItem from "../menu-item/AccountItem";
import { User } from "../../API";

function AccountList({ accounts, isRequest = false }: {
    accounts: User[]
    isRequest?: boolean
}) {

    const renderAccount = accounts.map((account) => {
        if (account.__typename === 'User') {
            return (
                <AccountItem
                    account={account}
                    key={account.id}
                    isRequest={isRequest}
                    >
                </AccountItem>
            )
        }
    }) as ReactNode[];

    return (
        <div className="w-full flex flex-col">
            {renderAccount}
        </div>
    )
}

export default AccountList;