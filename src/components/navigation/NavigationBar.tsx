import useTheme from "../../theme";
import NavigationButtonList from "./NavigationButtonList";


function NavigationBar() {
    const themeContext = useTheme();
    const theme = themeContext.currentTheme;

    const style = {
        backgroundColor: theme.color.secondary.background,
        width: '63px',
    }

    return (
        <div className="h-auto pt-6 flex flex-col overflow-hidden" style={style}>
            <NavigationButtonList />
            <button onClick={themeContext.toggle}>Toggle Theme</button>
        </div>
    )
}

export default NavigationBar;