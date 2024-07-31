import NavigationButton from "./NavigationButton";
import { IoPersonAddSharp, IoPersonSharp } from "react-icons/io5";
import { BsChatDotsFill } from "react-icons/bs";
import { RoutePath } from "../../RoutePath";
import { useNavigate } from "react-router-dom";
import UnreadBubble from "../UnreadBubble";
import { useAppSelector } from "../../hook";
import { useEffect, useState } from "react";

function NavigationButtonList() {

    useNavigate(); //To make the component re render when the route changes
    //Otherwise, the button will not be active
    //Do not remove

    const currentUser = useAppSelector(state => state.user.currentUser);

    const chats = useAppSelector(state => state.chats.friendChats.data);

    const myChats = chats?.filter(chat => chat.userID === currentUser?.lineID);
    const friendChats = chats?.filter(chat => chat.friendID === currentUser?.lineID);

    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        if (!friendChats || !myChats || !currentUser) return;

        let count = 0;

        for (const chat of friendChats) {
            const myChat = myChats.filter(item => item.id === chat.friendID + ":" + chat.userID)[0];
            if (!myChat) continue;

            const unreadMessages = chat.message?.items.filter(
                item => new Date(item?.createdAt as string).getTime() > new Date(myChat.lastReadTime).getTime()
            );

            count += unreadMessages?.length as number;
        }

        setUnreadCount(count);
    }, [chats, myChats, friendChats, currentUser]);


    return (
        <div>
            <NavigationButton link={RoutePath.FRIENDS}>
                <IoPersonSharp
                    size={22}
                    className={(location.pathname === RoutePath.FRIENDS) ? 'active' : 'inactive'}
                />
            </NavigationButton>
            <NavigationButton link={RoutePath.CHATS} className="relative">
                <BsChatDotsFill
                    size={22}
                    className={(location.pathname === RoutePath.CHATS) ? 'active' : 'inactive'}
                />
                { unreadCount > 0 &&
                    <UnreadBubble color="#ff334b" className="absolute" style={{
                        top: 10,
                        right: -15,
                    }}>
                        {unreadCount}
                    </UnreadBubble>
                }
            </NavigationButton>
            <NavigationButton link={RoutePath.ADD_FRIENDS}>
                <IoPersonAddSharp
                    size={22}
                    className={(location.pathname === RoutePath.ADD_FRIENDS) ? 'active' : 'inactive'}
                />
            </NavigationButton>
        </div>
    )
}

export default NavigationButtonList;