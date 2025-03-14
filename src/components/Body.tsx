// import { useLocation } from "react-router-dom"
// import Header from "./Header";
import { ReactNode } from "react";
import Menu from "./Menu";
import ChatPane from "./chat/ChatPane";
import { useAppSelector } from "../hook";
import ProfileModal from "./profile/ProfileModal";
// import { RoutePath } from "../RoutePath";

function Body({ children }: { children: ReactNode }) {

    // const location = useLocation();
    const accountModalState = useAppSelector((state) => state.states.accountModalState);

return (
    <div className="flex flex-col h-full flex-1">
        {accountModalState && <ProfileModal></ProfileModal>}
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