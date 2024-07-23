import useTheme from "../../theme";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResetEmail from "./resetComponent/ResetEmail";
import ResetNewPassword from "./resetComponent/ResetNewPassword";
import LineIcon from "../../components/LineIcon";
import { RoutePath } from "../../RoutePath";
import ClickableText from "../../components/input/ClickableText";
import Complete from "./authComponent/Complete";
import { confirmResetPassword, resetPassword } from "aws-amplify/auth";

type ResetPasswordState = 'email' | 'newPassword' | 'complete';

function ResetPasswordPage() {

    const theme = useTheme().currentTheme;

    const [resetPasswordState, setResetPasswordState] = useState<ResetPasswordState>('email');

    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const handleSendOtpButtonClicked = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage('');
        try {
            await resetPassword({
                username: email
            });
            setResetPasswordState('newPassword')
        }
        catch (e) {
            setErrorMessage((e as Error).message)
        }
    }

    const handleConfirmOtpButtonClicked = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage('');
        try {
            await confirmResetPassword({
                username: email,
                newPassword: newPassword,
                confirmationCode: otp
            })
            setResetPasswordState('complete');
        }
        catch (e) {
            setErrorMessage((e as Error).message);
        }
    }

    return (
        <div style={{ backgroundColor: theme.color.primary.background }}
            className="size-full flex flex-col items-center">
            <div className="flex flex-col items-center w-96 mt-20">
                <LineIcon size="150px" />
                <div className="w-96">
                    {resetPasswordState === 'email' &&
                        <form className="mt-10" onSubmit={(e) => handleSendOtpButtonClicked(e)}>
                            <ResetEmail email={email} setEmail={setEmail} />
                        </form>
                    }
                    {resetPasswordState === 'newPassword' &&
                        <form className="flex flex-col mt-10" onSubmit={handleConfirmOtpButtonClicked}>
                            <ResetNewPassword
                                otp={otp}
                                setOtp={setOtp}
                                password={newPassword}
                                setPassword={setNewPassword}
                                confirmPassword={confirmNewPassword}
                                setConfirmPassword={setConfirmNewPassword} />
                        </form>
                    }
                    {resetPasswordState === 'complete' && <Complete to={RoutePath.LOGIN}>Reset password complete</Complete>}
                </div>
                {resetPasswordState !== 'complete' &&
                    <div className="flex flex-row w-full mt-2.5">
                        <span className="text-xs font-light" style={{ color: theme.color.primary.error }}>
                            {errorMessage}
                        </span>
                        <div className="flex-1"></div>
                        <ClickableText className="text-xs" onClick={() => navigate(RoutePath.LOGIN)}>
                            Back to login
                        </ClickableText>
                    </div>
                }
            </div>
        </div>
    )
}

export default ResetPasswordPage;