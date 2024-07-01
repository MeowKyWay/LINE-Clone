import useTheme from "../theme";
import Logo from '../assets/lineLogo.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../components/input/PasswordInput";
import TextField from "../components/input/TextField";
import Button from "../components/input/Button";

function LoginPage() {

    const theme = useTheme().currentTheme;
    const themeContext = useTheme();

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const bgColor = {
        backgroundColor: theme.color.primary.background
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
            <div className="flex flex-col items-center" style={{ marginTop: '-20rem' }}>
                <div>
                    <img src={Logo} style={{ width: '84px', height: '50px', color: '#07b53b' }}></img>
                </div>
                <form className="flex flex-col mt-10 w-96" onSubmit={handleSubmit}>
                    <div className="border rounded" style={{
                        border: '1px solid',
                        borderColor: errorMessage ? theme.color.primary.error : theme.color.primary.inputBorderColor,
                    }}>
                        <TextField
                            type="text"
                            value={email}
                            onChange={setEmail}
                            className="border-0 border-b rounded-b-none">
                            Email
                        </TextField>
                        <TextField
                            type="password"
                            value={password}
                            onChange={setPassword}
                            className="border-none rounded-t-none">
                            Password
                        </TextField>
                    </div>
                    <Button
                        type={email && password ? 'primary' : 'disabled'}
                        className="mt-4">
                        Login
                    </Button>
                </form>
                <div className="flex flex-row">
                    
                </div>
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
