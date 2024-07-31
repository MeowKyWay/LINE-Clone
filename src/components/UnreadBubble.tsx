import useTheme from "../theme";

function UnreadBubble({ children, color, className, style }: {
    children: number,
    color?: string,
    className?: string,
    style?: React.CSSProperties,
}) {

    const theme = useTheme().currentTheme;

    return (
        <div className={`h-5 flex justify-center items-center ${className}`} style={{
            backgroundColor: color ? color : theme.color.primary.unreadBubble,
            color: '#ffffff',
            borderRadius: '10px',
            width: `calc( 20px + ${Math.floor(Math.log10(children)) * 6}px )`,
            minWidth: `calc( 20px + ${Math.floor(Math.log10(children)) * 6}px )`,
            fontSize: '12px',
            ...style
        }}>
            {children}
        </div>
    )
}

export default UnreadBubble;