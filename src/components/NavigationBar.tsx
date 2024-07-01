import useTheme from "../theme";
import NavigationButton from "./NavigationButton";
import { IoPersonSharp } from "react-icons/io5";
import { BsChatDotsFill } from "react-icons/bs";
import { IoPersonAddSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { RoutePath } from "../RoutePath";


function NavigationBar() {
    const location = useLocation();

    const themeContext = useTheme();
    const theme = themeContext.currentTheme;

    const style = {
        backgroundColor: theme.color.secondary.background,
        width: '63px',
    }

    return (
        <div className="h-auto pt-6 flex flex-col overflow-hidden" style={style}>
            <style>
                {`
                .inactive {
                    color: ${theme.color.primary.icon};
                }
                .inactive:hover {
                    color: ${theme.color.tertiary.icon};
                }
                .active {
                    color: ${theme.color.secondary.icon};
                }
                `}
            </style>
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
            <button onClick={themeContext.toggle}>Toggle Theme</button>
        </div>
    )
}

export default NavigationBar;