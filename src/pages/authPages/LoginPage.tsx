import useTheme from "../../theme";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../../components/input/TextField";
import Button from "../../components/input/Button";
import ClickableText from "../../components/input/ClickableText";
import LineIcon from "../../components/LineIcon";
import { RoutePath } from "../../RoutePath";

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

    const validateEmail = (input: string): boolean => {
        // Basic email validation using regex
        const regex: RegExp = /^(?:(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)|(?:".+"))@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?)$/;
        return regex.test(input);
    };

    return (
        <div style={bgColor} className="w-full h-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center" style={{ marginTop: '-20rem' }}>
                <LineIcon size="150px" />
                <div className="w-96">
                    <form className="flex flex-col mt-10 w-full" onSubmit={handleSubmit}>
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
                                className="border-0 rounded-t-none">
                                Password
                            </TextField>
                        </div>
                        <Button
                            type={email && password ? 'primary' : 'disabled'}
                            className="mt-4">
                            Login
                        </Button>
                    </form>
                    <div className="flex flex-row w-full mt-2.5">
                        <ClickableText className="text-xs" onClick={() => navigate(RoutePath.REGISTER)}>
                            Don't have an account?
                        </ClickableText>
                        <div className="flex-1"></div>
                        <ClickableText className="text-xs" onClick={() => navigate(RoutePath.RESET_PASSWORD)}>
                            Reset password
                        </ClickableText>
                    </div>
                    <span className="mt-2.5 text-xs font-light" style={{ color: theme.color.primary.error }}>
                        {errorMessage}
                    </span>
                </div>
            </div>
            <button onClick={themeContext.toggle}>Toggle Theme</button>
        </div>
    )
}

export default LoginPage;
