import { ReactNode } from "react";
import useTheme from "../../theme";

function ClickableText({ children, onClick, className = '' }: {
    children: ReactNode,
    onClick?: () => void,
    className?: string,
}) {

    const theme = useTheme().currentTheme;

    return (
        <span
            onClick={onClick}
            className={'cursor-pointer ' + className}
            style={{ color: theme.color.tertiary.text }}
        >
            {children}
        </span>
    )
}

export default ClickableText;