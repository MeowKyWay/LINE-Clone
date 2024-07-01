import classNames from "classnames";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

function TextField({ children, onChange, value, className, type, name, autoComplete, spellCheck = false, resetButton = false }: {
    children?: string,
    onChange: (value: string) => void,
    value: string,
    className?: string,
    type: 'password' | 'text' | 'number',
    name?: string,
    autoComplete?: string,
    spellCheck?: boolean,
    resetButton?: boolean
}) {

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
            'h-10 border border-gray text-sm font-light focus-within:border-green rounded transition-all',
            'bg-white',
            className
        ],
    );

    const inputClassName = classNames(
        [
            'px-3.5 py-1.5 flex-1 focus:outline-none rounded',
        ],
    );

    return (
        <div className={classes}>
            <input
                type={(type === 'password') ? (hidden) ? 'password' : 'text' : 'text'}
                value={(type === 'number') ? number : value}
                onChange={(e) => handleChange(e.target.value)}
                placeholder={children}
                className={inputClassName}
                name={name}
                autoComplete={autoComplete}
                spellCheck={spellCheck}
            >
            </input>
            {type === 'password' && (
                <button onClick={() => setHidden(!hidden)} className='w-9 h-9 grid place-content-center'>
                    {hidden && <FaEyeSlash className="text-lg text-gray-400" />}
                    {!hidden && <FaEye className="text-lg text-gray-400" />}
                </button>

            )}
            {resetButton && (
                <button onClick={() => handleChange('')} className='w-9 h-9 grid place-content-center'>
                    <TiDelete className="text-lg text-gray-400" />
                </button>
            )}
        </div>

    )
}

export default TextField;