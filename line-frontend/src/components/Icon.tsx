import { ReactNode } from "react"

function Icon({children, size, color, hover, type='default'}: {
    children: ReactNode, 
    size: string, 
    color: string, 
    hover?: string, 
    type?: 'default' | 'outlined' | 'round'
}) {

    const style={
        fontSize: size,
        color: color,
        ':hover': {
            color: hover,
        }
    }

    let className = 'material-icons';

    switch (type) {
        case 'default':
            className = 'material-icons';
            break;
        case 'outlined':
            className = 'material-icons-outlined';
            break;
        case 'round':
            className = 'material-icons-round';
            break;
    }

    return (
        <i style={style} className={className}>{children}</i>
    )
}

export default Icon;