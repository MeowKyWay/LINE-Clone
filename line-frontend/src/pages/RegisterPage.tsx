import useTheme from "../theme";
import Logo from '../assets/lineLogo.png'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../components/input/PasswordInput";

function RegisterPage() {
    const theme = useTheme().currentTheme;
    const themeContext = useTheme();
    const [emailTerm, setEmailTerm] = useState('');
    const [passwordTerm, setPasswordTerm] = useState('');
    const [confirmPasswordTerm, setConfirmPasswordTerm] = useState('');
    const [username, setUsername] = useState('');
    const [lineId, setLineId] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [registered, setRegistered] = useState(false);
    const [confirmEmailPass, setConfirmEmailPass] = useState('');
    const navigate = useNavigate();

    const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (passwordTerm === confirmPasswordTerm && validateEmail(emailTerm)) {
            setPasswordMatch(true);
        } else if (!validateEmail(emailTerm)) {
            const inputs = event.currentTarget.querySelectorAll('input');
            inputs.forEach((input: HTMLInputElement) => input.blur());
            setErrorMessage("Please enter a valid email address.");
        } else if (passwordTerm !== confirmPasswordTerm) {
            const inputs = event.currentTarget.querySelectorAll('input');
            inputs.forEach((input: HTMLInputElement) => input.blur());
            setErrorMessage("Passwords do not match.");
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!validatePhoneNumber(phoneNumber)) {
            const inputs = event.currentTarget.querySelectorAll('input');
            inputs.forEach((input: HTMLInputElement) => input.blur());
            setErrorMessage("Please enter a valid phone number");
        } else {
            setRegistered(true);
        }
    }

    const handleConfirmEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate('/login');
    }

    const handleLoginClick = () => {
        navigate('/login');
    }

    const bgColor = {
        backgroundColor: theme.color.primary.background
    }

    const inputStyle = {
        backgroundColor: theme.color.primary.background,
        borderColor: theme.color.primary.inputBorderColor,
        color: theme.color.primary.text,
    }

    const inputColorTop = {
        ...inputStyle,
        borderTopLeftRadius: '0.25rem', // 4px
        borderTopRightRadius: '0.25rem', // 4px
    }

    const inputColorMiddle = {
        ...inputStyle,
        borderTop: 'none', // Remove the top border to avoid intersection
    }

    const inputColorBottom = {
        ...inputStyle,
        borderTop: 'none', // Remove the top border to avoid intersection
        borderBottomRightRadius: '0.25rem', // 4px
        borderBottomLeftRadius: '0.25rem' // 4px
    }

    const textColor = {
        color: theme.color.tertiary.text
    }

    const validateEmail = (input: string): boolean => {
        // Basic email validation using regex
        const regex: RegExp = /^(?:(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)|(?:".+"))@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?)$/;
        return regex.test(input);
    };

    const validatePhoneNumber = (phoneNumber: string): boolean => {
        // Define a regular expression for phone numbers
        const phoneRegex = /^\+?(\d{1,3})?[-. ]?\(?\d{1,4}\)?[-. ]?\d{1,4}[-. ]?\d{6,9}$/;
        // Test the phone number against the regular expression
        return phoneRegex.test(phoneNumber);
    }

    return (
        <div style={bgColor} className="size-full w-full h-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center relative" style={{ marginTop: '-20rem' }}>
                <div>
                    <img src={Logo} style={{ width: '84px', height: '50px', color: '#07b53b' }}></img>
                </div>

                {!passwordMatch ? (
                    <form className="flex flex-col mt-10" onSubmit={handleNext}>
                        <div className="border rounded" style={{borderColor: errorMessage ? 'red' : 'none' , borderStyle: errorMessage ? 'solid' : 'none'}}>
                        <input
                            placeholder="Email address"
                            style={inputColorTop}
                            value={emailTerm}
                            className="w-80 border h-12 p-4 block rounded-t"
                            required
                            onChange={(e) => {
                                setEmailTerm(e.target.value);
                                setErrorMessage("");
                            }}
                        />
                        <PasswordInput
                            placeholder="Password"
                            style={inputColorMiddle}
                            value={passwordTerm}
                            required
                            onChange={e => setPasswordTerm(e.target.value)}
                        />
                        <PasswordInput
                            placeholder="Confirm password"
                            style={inputColorBottom}
                            value={confirmPasswordTerm}
                            required
                            onChange={e => setConfirmPasswordTerm(e.target.value)}
                        />
                        </div>
                        {emailTerm && passwordTerm && confirmPasswordTerm ? (
                            <button className="text-white rounded mt-2 h-12" style={{ backgroundColor: '#43b453' }}>Next</button>
                        ) : (
                            <button className="text-white rounded mt-2 h-12" style={{ backgroundColor: '#b7b7b7' }} disabled>Next</button>
                        )}
                    </form>
                ) : !registered ? (
                    <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
                        <div className="border rounded" style={{borderColor: errorMessage ? 'red' : 'none' , borderStyle: errorMessage ? 'solid' : 'none'}}>
                        <input
                            placeholder="Username"
                            style={inputColorTop}
                            value={username}
                            className="w-80 border h-12 p-4 block rounded-t"
                            required
                            onChange={e => setUsername(e.target.value)}
                        />
                        <input
                            placeholder="Line-ID"
                            style={inputColorMiddle}
                            value={lineId}
                            className="w-80 border h-12 p-4 block"
                            required
                            onChange={e => setLineId(e.target.value)}
                        />
                        <input
                            placeholder="Phone number"
                            style={inputColorBottom}
                            value={phoneNumber}
                            className="w-80 border h-12 p-4 block rounded-b"
                            required
                            onChange={(e) => {
                                setPhoneNumber(e.target.value);
                                setErrorMessage("");
                            }}
                        />
                        </div>
                        {username && lineId && phoneNumber ? (
                            <button className="text-white rounded mt-2 h-12" style={{ backgroundColor: '#43b453' }}>Register</button>
                        ) : (
                            <button className="text-white rounded mt-2 h-12" style={{ backgroundColor: '#b7b7b7' }} disabled>Register</button>
                        )}
                    </form>
                ) : (
                    <div className="flex flex-col items-center">
                        <div style={textColor} className="relative top-8">
                            Send confirm password to {emailTerm}
                        </div>
                        <form className="flex flex-col mt-10" onSubmit={handleConfirmEmail}>
                            <input
                                placeholder="Enter your confirm password"
                                className="w-80 border h-12 p-4 block border rounded"
                                style={inputStyle}
                                value={confirmEmailPass}
                                onChange={(e) => {
                                    setConfirmEmailPass(e.target.value);
                                    setErrorMessage('');
                                }}
                                required
                            />
                            {confirmEmailPass ? (
                                <button className="text-white rounded mt-2 h-12" style={{ backgroundColor: '#43b453' }}>Confirm Email</button>
                            ) : (
                                <button className="text-white rounded mt-2 h-12" style={{ backgroundColor: '#b7b7b7' }} disabled>Confirm Email</button>
                            )}
                        </form>
                    </div>
                )}
                {errorMessage && <div className="absolute left-0 bottom-0 text-red-500 text-sm">{errorMessage}</div>}

                {!registered ? (
                    <div className="relative cursor-pointer mt-2 bottom-0" style={{ left: '8rem' }} onClick={handleLoginClick}>
                        <p style={textColor} className="text-xs">มีบัญชีอยู่แล้ว</p>
                    </div>
                ) : null}
            </div>
            <button onClick={themeContext.toggle}>Toggle Theme</button>
        </div>
    )
}

export default RegisterPage;
