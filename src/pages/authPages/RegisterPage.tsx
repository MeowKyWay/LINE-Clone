import useTheme from "../../theme";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../../components/input/TextField";
import Button from "../../components/input/Button";
import LineIcon from "../../components/LineIcon";
import ClickableText from "../../components/input/ClickableText";
import { RoutePath } from "../../RoutePath";
import { signUp } from "@aws-amplify/auth";
import ConfirmSignUp from "./authComponent/ConfirmSignUp";

function RegisterPage() {

    const navigate = useNavigate();

    const theme = useTheme().currentTheme;

    const [email, setEmail] = useState('');
    const [lineID, setLineID] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const [step, setStep] = useState<'register' | 'confirm_sign_up'>('register');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!confirm("Register?")) return;

        try {
            const res = await signUp({
                username: lineID,
                password: password,
                options: {
                    userAttributes: {
                        email: email,
                    }
                }
            })
            if (res.nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
                setStep('confirm_sign_up');
            }
        }
        catch (e) {
            setErrorMessage((e as Error).message);
        }
    }

    return (
        <div style={{ backgroundColor: theme.color.primary.background }}
            className="size-full flex flex-col items-center">
            <div className="flex flex-col items-center mt-20">
                <LineIcon size="150px" />
                <div className="w-96">
                    {step === 'register' &&
                        <form className="flex flex-col mt-10 w-full" onSubmit={handleSubmit}>
                            <div className="border rounded" style={{
                                border: '1px solid',
                                borderColor: errorMessage ? theme.color.primary.error : theme.color.primary.inputBorderColor,
                            }}>
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
                                    type="text"
                                    value={lineID}
                                    onChange={setLineID}
                                    className="border-0 border-b rounded-none"
                                    autoComplete="email"
                                    name="email">
                                    Line ID
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
                                type={email && password && lineID && password === confirmPassword ? 'primary' : 'disabled'}
                                className="mt-4">
                                Register
                            </Button>
                        </form>
                    }
                    {step === 'confirm_sign_up' &&
                        <ConfirmSignUp username={lineID} />
                    }

                </div>
                <div className="flex flex-row w-full mt-2.5">
                    <span className="text-xs font-light" style={{ color: theme.color.primary.error }}>
                        {errorMessage}
                    </span>
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
