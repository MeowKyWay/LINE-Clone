import useTheme from "../../theme";

function ChatTextArea () {

    const theme = useTheme().currentTheme;

    return (
        <div 
            className="h-30 border-box border-t flex flex-col pt-3"
            style={{
                borderColor: theme.color.primary.line,
                minHeight: '120px',
            }}>
            <textarea
                className="flex-1 bg-transparent focus:outline-none text-sm px-3.5"
                placeholder="Enter a message"
                style={{
                    resize: 'none',
                    color: theme.color.primary.text,
                }}>
            </textarea>
            <div className="h-10"></div>
        </div>
    )
}

export default ChatTextArea;