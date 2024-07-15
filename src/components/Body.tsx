import { useLocation } from "react-router-dom"
import Header from "./Header";
import { ReactNode } from "react";
import Menu from "./Menu";
import ChatPane from "./chat/ChatPane";
import { RoutePath } from "../RoutePath";

function Body ({children}: {children: ReactNode}) {

    const location = useLocation();

    return (
        <div className="flex flex-col h-full flex-1">
            {location.pathname===RoutePath.CHATS && <Header />}
            <div className="flex flex-row w-full flex-1">
                <Menu>
                    {children}
                </Menu>
                <ChatPane />
            </div>
        </div>
    )
}

export default Body;