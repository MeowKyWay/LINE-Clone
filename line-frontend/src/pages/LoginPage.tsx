import useTheme from "../theme";
import Logo from '../assets/lineLogo.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../components/input/PasswordInput";

function LoginPage() {
    const theme = useTheme().currentTheme;
    const themeContext = useTheme();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState("");

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

    const inputColorBottom = {
        ...inputStyle,
        borderTop: 'none', // Remove the top border to avoid intersection
        borderBottomRightRadius: '0.25rem', // 4px
        borderBottomLeftRadius: '0.25rem' // 4px
    }

    const textColor = {
        color: theme.color.tertiary.text
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateEmail(email)) {
            navigate("/");
        } else {
            const inputs = event.currentTarget.querySelectorAll('input');
            inputs.forEach((input: HTMLInputElement) => input.blur());
            setErrorMessage("Please enter a valid email address.");
        }
    }

    const handleResetPasswordClick = () => {
        navigate('/resetPassword')
    }

    const handleRegisterClick = () => {
        navigate('/register')
    }

    const validateEmail = (input: string): boolean => {
        // Basic email validation using regex
        const regex: RegExp = /^(?:(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)|(?:".+"))@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?)$/;
        return regex.test(input);
    };

    return (
        <div style={bgColor} className="w-full h-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center relative" style={{ marginTop: '-20rem' }}>
                <div>
                    <img src={Logo} style={{ width: '84px', height: '50px', color: '#07b53b' }}></img>
                </div>
                <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
                <div className="border rounded" style={{borderColor: errorMessage ? 'red' : 'none' , borderStyle: errorMessage ? 'solid' : 'none'}}>
                    <input
                        placeholder="Email address"
                        style={inputColorTop}
                        value={email}
                        className="w-80 border h-12 p-4 rounded-t"
                        required
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setErrorMessage("");
                        }}
                    />
                    <PasswordInput
                        placeholder="Password"
                        style={inputColorBottom}
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                    {email && password ? (
                        <button className="text-white rounded mt-2 h-12" style={{ backgroundColor: '#43b453' }}>Login</button>
                    ) : (
                        <button className="text-white rounded mt-2 h-12" style={{ backgroundColor: '#b7b7b7' }} disabled>Login</button>
                    )}
                </form>
                {errorMessage && <div className="absolute left-0 bottom-0 text-red-500 text-sm" style={{ bottom: '-24px' }}>{errorMessage}</div>}
            </div>
            <div className="relative cursor-pointer mt-2 bottom-0 space-y-1" style={{ left: '7.25rem' }}>
                <p style={textColor} className="text-xs" onClick={handleResetPasswordClick}>Reset password</p>
                <p style={textColor} className="absolute text-xs left-10" onClick={handleRegisterClick}>Register</p>
            </div>
            <button onClick={themeContext.toggle}>Toggle Theme</button>
        </div>
    )
}

export default LoginPage;
