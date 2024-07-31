import { useAppSelector } from "../../hook";
import useTheme from "../../theme";

function ChatBubble({ children, isCurrentUser = false, showSearchField = false }:
  { children: string, isCurrentUser: boolean, showSearchField: boolean, selected?: boolean }) {
  const theme = useTheme().currentTheme;
  const messageTerm = useAppSelector(state => state.terms.messagesTerm);

  const highlightText = (text: string, term: string | null) => {
    if (!term || !showSearchField) return text;
    const parts = text.split(new RegExp(`(${term})`, 'gi'));

    return parts.map((part, index) => (
      part.toLowerCase() === term.toLowerCase() ?
        <span key={index} className="highlight">
          {part}
        </span>
        :
        part
    ));
  };

  return (
    <div
      className="p-2.5 rounded-2xl text-xs leading-3 font-light h-fit"
      style={{
        backgroundColor: isCurrentUser ? "#86d97b" : theme.color.chatBubble.background,
        color: isCurrentUser ? "#2d2e30" : theme.color.chatBubble.text,
        wordWrap: 'break-word',
      }}
    >
      <div>
        {highlightText(children, messageTerm)}
      </div>
    </div>
  );
}

export default ChatBubble;
