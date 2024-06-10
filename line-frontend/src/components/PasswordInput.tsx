import React, { useState } from 'react';
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

interface PasswordInputProps {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style: React.CSSProperties;
    required?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder, value, onChange, style, required = false}) => {
    const [showPassword, setShowPassword] = useState(false);



    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className="relative">
            <input
                placeholder={placeholder}
                style={style}
                value={value}
                className="w-80 border h-12 p-4"
                type={showPassword ? "text" : "password"}
                onChange={onChange}
                required={required}
            />
            <button type="button" onMouseDown={togglePasswordVisibility} onMouseUp={togglePasswordVisibility} className='absolute right-2 top-4'>
                {showPassword ?  <IoEyeSharp className='text-gray-400'/> : <FaEyeSlash className='text-gray-400'/> }
            </button>
        </div>
    );
};

export default PasswordInput;
