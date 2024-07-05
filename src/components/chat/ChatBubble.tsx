import useTheme from "../../theme";

function ChatBubble ({ children }: { children: string }) {

  const theme = useTheme().currentTheme;

  return (
    <div 
      className="p-2.5 rounded-2xl text-xs leading-3 font-light h-fit"
      style={{
        backgroundColor: theme.color.chatBubble.background,
        color: theme.color.chatBubble.text,
        textWrap: 'wrap',
      }}  
    >
      {children}
    </div>
  )
}

export default ChatBubble;
