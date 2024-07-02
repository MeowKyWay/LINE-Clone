import NavigationButton from "./NavigationButton";
import { IoPersonAddSharp, IoPersonSharp } from "react-icons/io5";
import { BsChatDotsFill } from "react-icons/bs";
import { RoutePath } from "../../RoutePath";
import { useNavigate } from "react-router-dom";

function NavigationButtonList() {

    useNavigate(); //To make the component re render when the route changes
    //Otherwise, the button will not be active
    //Do not remove

    return (
        <div>
            <NavigationButton link={RoutePath.FRIENDS}>
                <IoPersonSharp
                    size={22}
                    className={(location.pathname === RoutePath.FRIENDS) ? 'active' : 'inactive'}
                />
            </NavigationButton>
            <NavigationButton link={RoutePath.CHATS}>
                <BsChatDotsFill
                    size={22}
                    className={(location.pathname === RoutePath.CHATS) ? 'active' : 'inactive'}
                />
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