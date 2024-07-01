import { ReactNode } from "react";
import useTheme from "../theme"

function Menu ({children}: {children: ReactNode}) {

    const theme = useTheme().currentTheme;

    const style = {
        backgroundColor: theme.color.primary.background,
        width: '302px',
        height: '100%',
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Menu;