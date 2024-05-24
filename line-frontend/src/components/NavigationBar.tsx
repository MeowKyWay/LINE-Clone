import useTheme from "../theme";
import NavigationButton from "./NavigationButton";
import { IoPersonSharp } from "react-icons/io5";
import { BsChatDotsFill } from "react-icons/bs";
import { IoPersonAddSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";


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
            <NavigationButton link="/friends">
                <IoPersonSharp
                    size={22}
                    className={(location.pathname === '/friends') ? 'active' : 'inactive'}
                />
            </NavigationButton>
            <NavigationButton link="/chats">
                <BsChatDotsFill
                    size={22}
                    className={(location.pathname === '/chats') ? 'active' : 'inactive'}
                />
            </NavigationButton>
            <NavigationButton link="/add-friends">
                <IoPersonAddSharp
                    size={22}
                    className={(location.pathname === '/add-friends') ? 'active' : 'inactive'}
                />
            </NavigationButton>
            <button onClick={themeContext.toggle}>Toggle Theme</button>
        </div>
    )
}

export default NavigationBar;