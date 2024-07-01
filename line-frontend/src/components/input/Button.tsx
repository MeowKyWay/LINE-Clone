import classNames from "classnames";
import { ReactNode } from "react"
import useTheme from "../../theme";

function Button({ children, onClick, type = 'primary', className = '', disabled = false }: {
    children: ReactNode,
    onClick?: () => void,
    type: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'disabled',
    className?: string
    disabled?: boolean
}
) {

    const theme = useTheme().currentTheme;

    const style = {
        backgroundColor: type === 'primary' ? theme.color.primary.
    }
    const classes = classNames('box-border rounded ' + className, {
        'bg-green text-white': type === ButtonType.PRIMARY,
        'bg-blue-500 text-white': type === ButtonType.SECONDARY,
        'bg-white text-black border border-gray-200 hover:bg-gray-200': type === ButtonType.TERTIARY,
        'bg-red-500 text-white': type === ButtonType.WARNING,
        'px-2': !className.includes('px-')
    });

    return (
        <button className={classes} onClick={onClick} disabled={disabled}>{children}</button>
    )
}

export default Button;