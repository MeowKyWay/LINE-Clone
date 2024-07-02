import NavigationButton from "./NavigationButton";
import { IoPersonAddSharp, IoPersonSharp } from "react-icons/io5";
import { BsChatDotsFill } from "react-icons/bs";
import { RoutePath } from "../../RoutePath";

function NavigationButtonList() {

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