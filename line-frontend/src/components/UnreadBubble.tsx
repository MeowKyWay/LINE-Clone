import useTheme from "../theme";

function UnreadBubble({ children }: { children: number }) {

    const theme = useTheme().currentTheme;

    const style = {
        backgroundColor: theme.color.primary.unreadBubble,
        color: '#ffffff',
        borderRadius: '10px',
        width: `calc( 20px + ${Math.floor(Math.log10(children)) * 6}px )`,
        fontSize: '12px'
    }

    return (
        <div className="h-5 flex justify-center items-center" style={style}>
            {children}
        </div>
    )
}

export default UnreadBubble;