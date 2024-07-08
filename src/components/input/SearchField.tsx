import useTheme from "../../theme"
import { IoSearch } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";

function SearchField({ height, width, placeholder = "", round = false, value, onChange }: {
    height: string,
    width: string,
    placeholder?: string,
    round?: boolean,
    value: string,
    onChange: (value: string) => void,
}) {

    const theme = useTheme().currentTheme;

    const handleReset = () => {
        onChange("");
    }

    const box = {
        backgroundColor: theme.color.primary.field,
        color: theme.color.primary.text,
        borderRadius: round ? "4px" : "0px",
        width: width,
        height: height,
    }

    const input = {
        color: theme.color.primary.text,
    }

    return (
        <div className="flex flex-row items-center px-2" style={box}>
            <style>
                {`
                    input::placeholder {
                        color: ${theme.color.tertiary.text};
                    }
                    input:focus {
                        outline: none;
                        border: none;
                    }
                `}
            </style>
            <IoSearch color={theme.color.tertiary.text}></IoSearch>
            <input
                type="text"
                maxLength={20}
                onChange={(e) => onChange(e.target.value)}
                value={value}
                className="bg-transparent text-xs font-extralight h-full pl-2 flex-1"
                style={input}
                placeholder={placeholder}
                spellCheck="false"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
            >
            </input>
            {
                value && (
                    <button type="button" onClick={handleReset}>
                        <TiDelete color={theme.color.tertiary.text} size='20px'></TiDelete>
                    </button>
                )
            }


        </div>
    )
}

export default SearchField;