import useTheme from "../../theme";
import NavigationButtonList from "./NavigationButtonList";
import NavigationMoreButton from "./NavigationMoreButton";


function NavigationBar() {
    const themeContext = useTheme();
    const theme = themeContext.currentTheme;

    const style = {
        backgroundColor: theme.color.secondary.background,
        width: '63px',
    }

    return (
        <div className="h-auto pt-6 flex flex-col overflow-hidden items-center pb-6" style={style}>
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
            <NavigationButtonList />
            <div className="flex-1" />
            <NavigationMoreButton />
        </div>
    )
}

export default NavigationBar;