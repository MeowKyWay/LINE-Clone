import classNames from "classnames";
import { ReactNode } from "react"
import useTheme from "../../theme";

function Button({ children, onClick, variant = 'primary', type, className = '' }: {
    children: ReactNode,
    onClick?: () => void,
    variant: 'primary' | 'warning' | 'disabled',
    type?: 'button' | 'submit' | 'reset',
    className?: string
}
) {

    const theme = useTheme().currentTheme;

    const style = {
        backgroundColor:
            variant === 'primary' ? theme.color.primary.button :
                variant === 'warning' ? theme.color.primary.error :
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
            disabled={variant === 'disabled'}
            type={type}
        >{children}</button>
    )
}

export default Button;