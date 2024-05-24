import useTheme from "../theme"

function Chat () {

    const theme = useTheme().currentTheme;

    const style = {
        backgroundColor: theme.color.primary.background,
        borderColor: theme.color.primary.line,
    }

    return (
        <div className="size-auto flex-1 border-box border-l" style={style}>

        </div>
    )
}

export default Chat;