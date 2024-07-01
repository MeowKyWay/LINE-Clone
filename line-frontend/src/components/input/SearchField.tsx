import { ChangeEvent } from "react";
import useTheme from "../../theme"
import { IoSearch } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { PayloadAction } from "@reduxjs/toolkit";

function SearchField({ height, width, placeholder = "", round = false, term, setTerm, onChange }: {
    height: string,
    width: string,
    placeholder?: string,
    round?: boolean,
    term: string,
    setTerm: (value: string) => PayloadAction<string>,
    onChange?: () => void,
}) {

    const theme = useTheme().currentTheme;

    const dispatch = useDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setTerm(event.target.value));
        if (onChange) {
            onChange();
        }
    }

    const handleReset = () => {
        dispatch(setTerm(''));
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
                onChange={(e) => handleChange(e)}
                value={term}
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
                term && (
                    <button onClick={handleReset}>
                        <TiDelete color={theme.color.tertiary.text} size='20px'></TiDelete>
                    </button>
                )
            }


        </div>
    )
}

export default SearchField;