import useTheme from "../../theme";
import Logo from '../../assets/lineLogo.png'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../../components/input/PasswordInput";
import TextField from "../../components/input/TextField";
import Button from "../../components/input/Button";
import LineIcon from "../../components/LineIcon";

function RegisterPage() {

    const navigate = useNavigate();

    const theme = useTheme().currentTheme;
    const themeContext = useTheme();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    const bgColor = {
        backgroundColor: theme.color.primary.background
    }

    return (
        <div style={bgColor} className="size-full w-full h-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center relative" style={{ marginTop: '-20rem' }}>
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
                                className="border-0 border-b rounded-none">
                                Password
                            </TextField>
                            <TextField
                                type="password"
                                value={confirmPassword}
                                onChange={setConfirmPassword}
                                className="border-0 rounded-t-none">
                                Confirm Password
                            </TextField>
                        </div>
                        <Button
                            type={email && password && password === confirmPassword ? 'primary' : 'disabled'}
                            className="mt-4">
                            Register
                        </Button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default RegisterPage;
