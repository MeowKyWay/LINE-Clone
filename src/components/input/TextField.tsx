import classNames from "classnames";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import useTheme from "../../theme";

function TextField({ children, onChange, value, className, type, name, autoComplete, spellCheck = false, resetButton = false, disabled = false }: {
    children?: string,
    onChange: (value: string) => void,
    value: string,
    className?: string,
    type: 'password' | 'text' | 'number',
    name?: string,
    autoComplete?: string,
    spellCheck?: boolean,
    resetButton?: boolean
    disabled?: boolean
}) {

    const theme = useTheme().currentTheme;

    const [hidden, setHidden] = useState(type === 'password');

    const [number, setNumber] = useState(value);

    const handleChange = (newValue: string) => {
        if (type !== 'number') {
            onChange(newValue);
            return;
        }

        const numericValue = newValue.replace(/[a-zA-Z]/g, '');

        setNumber(numericValue);
        onChange(numericValue);
    }

    const classes = classNames(
        [
            'flex flex-row items-center',
            'h-10 border text-sm font-light rounded',
            'bg-transparent',
            className
        ],
    );

    const inputClassName = classNames(
        [
            'px-3.5 py-1.5 flex-1 focus:outline-none rounded',
            'bg-transparent',
        ],
    );

    return (
        <div className={classes}
            style={{
                borderColor: theme.color.primary.inputBorderColor,
                color: theme.color.primary.text
            }}>
            <input
                type={(type === 'password') ? (hidden) ? 'password' : 'text' : 'text'}
                value={(type === 'number') ? number : value}
                onChange={(e) => handleChange(e.target.value)}
                placeholder={children}
                className={inputClassName}
                name={name}
                autoComplete={autoComplete}
                spellCheck={spellCheck}
                disabled={disabled}
            >
            </input>
            {type === 'password' && (
                <button type="button" onClick={() => setHidden(!hidden)} className='w-9 h-9 grid place-content-center'>
                    {hidden && <FaEyeSlash className="text-lg text-gray-400" />}
                    {!hidden && <FaEye className="text-lg text-gray-400" />}
                </button>

            )}
            {resetButton && (
                <button type="button" onClick={() => handleChange('')} className='w-9 h-9 grid place-content-center'>
                    <TiDelete className="text-lg text-gray-400" />
                </button>
            )}
        </div>

    )
}

export default TextField;