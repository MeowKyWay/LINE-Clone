import { useAppSelector } from "../../hook";
import useTheme from "../../theme";

function ChatBubble({ children }: { children: string }) {
  const theme = useTheme().currentTheme;
  const messageTerm = useAppSelector(state => state.terms.messagesTerm);
  console.log("messageTerm in ChatBubble:", messageTerm);

  const isTermIncluded = messageTerm && children.toLowerCase().includes(messageTerm.toLowerCase());

  return (
    <div
      className="p-2.5 rounded-2xl text-xs leading-3 font-light h-fit"
      style={{
        backgroundColor: isTermIncluded ? "red" : theme.color.chatBubble.background,
        color: theme.color.chatBubble.text,
        wordWrap: 'break-word',
      }}
    >
      {children}
    </div>
  );
}

export default ChatBubble;
