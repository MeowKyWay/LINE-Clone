import useTheme from "../../theme";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../../components/input/TextField";
import Button from "../../components/input/Button";
import LineIcon from "../../components/LineIcon";
import ClickableText from "../../components/input/ClickableText";
import { RoutePath } from "../../RoutePath";
import { signUp } from "@aws-amplify/auth";

function RegisterPage() {

    const navigate = useNavigate();

    const theme = useTheme().currentTheme;

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const res = await signUp({
            username: email,
            password: password,
            options: {
                userAttributes: {
                    email: email,
                    preferred_username: username,
                }
            }
        })

        console.log(res);
    }

    return (
        <div style={{ backgroundColor: theme.color.primary.background }}
            className="size-full flex flex-col items-center">
            <div className="flex flex-col items-center mt-20">
                <LineIcon size="150px" />
                <div className="w-96">
                    <form className="flex flex-col mt-10 w-full" onSubmit={handleSubmit}>
                        <div className="border rounded" style={{
                            border: '1px solid',
                            borderColor: errorMessage ? theme.color.primary.error : theme.color.primary.inputBorderColor,
                        }}>
                            <TextField
                                type="text"
                                value={username}
                                onChange={setUsername}
                                className="border-0 border-b rounded-b-none"
                                autoComplete="username"
                                name="username">
                                Username
                            </TextField>
                            <TextField
                                type="text"
                                value={email}
                                onChange={setEmail}
                                className="border-0 border-b rounded-none"
                                autoComplete="email"
                                name="email">
                                Email
                            </TextField>
                            <TextField
                                type="password"
                                value={password}
                                onChange={setPassword}
                                className="border-0 border-b rounded-none"
                                autoComplete="password"
                                name="password">
                                Password
                            </TextField>
                            <TextField
                                type="password"
                                value={confirmPassword}
                                onChange={setConfirmPassword}
                                className="border-0 rounded-t-none"
                                autoComplete="password"
                                name="confirm-password">
                                Confirm Password
                            </TextField>
                        </div>
                        <Button
                            type={email && password && username && password === confirmPassword ? 'primary' : 'disabled'}
                            className="mt-4">
                            Register
                        </Button>
                    </form>
                </div>
                <div className="flex flex-row w-full mt-2.5">
                    <div className="flex-1"></div>
                    <ClickableText className="text-xs" onClick={() => navigate(RoutePath.LOGIN)}>
                        Already have an account?
                    </ClickableText>
                </div>

            </div>
        </div>
    )
}

export default RegisterPage;
