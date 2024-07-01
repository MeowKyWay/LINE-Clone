import classNames from "classnames";
import { ReactNode } from "react"
import useTheme from "../../theme";

function Button({ children, onClick, type = 'primary', className = '', disabled = false }: {
    children: ReactNode,
    onClick?: () => void,
    type: 'primary' | 'warning' | 'disabled',
    className?: string
    disabled?: boolean
}
) {

    const theme = useTheme().currentTheme;

    const style = {
        backgroundColor:
            type === 'primary' ? theme.color.primary.button :
                type === 'warning' ? theme.color.primary.error :
                    theme.color.primary.buttonDisabled,
    }

    const classes = classNames('box-border rounded text-white h-10 ' +
        className, {
        'px-2': !className.includes('px-')
    });

    return (
        <button
            className={classes}
            style={style}
            onClick={onClick}
            disabled={disabled}
        >{children}</button>
    )
}

export default Button;