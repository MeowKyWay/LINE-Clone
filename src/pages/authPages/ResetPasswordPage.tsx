import useTheme from "../../theme";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/input/Button";
import ResetEmail from "./resetComponent/ResetEmail";
import ResetOtp from "./resetComponent/ResetOtp";
import ResetNewPassword from "./resetComponent/ResetNewPassword";
import LineIcon from "../../components/LineIcon";
import { RoutePath } from "../../RoutePath";
import ClickableText from "../../components/input/ClickableText";

type ResetPasswordState = 'email' | 'otp' | 'newPassword' | 'complete';

function ResetPasswordPage() {

    const theme = useTheme().currentTheme;
    const themeContext = useTheme();

    const [resetPasswordState, setResetPasswordState] = useState<ResetPasswordState>('email');

    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()


    const bgColor = {
        backgroundColor: theme.color.primary.background
    }

    const handleSendOtpButtonClicked = async () => {
        //sendOTP()
        setResetPasswordState('otp')
    }

    const handleConfirmOtpButtonClicked = () => {
        setResetPasswordState('newPassword')
    }

    const handleResetPasswordButtonClicked = async () => {
        //resetPassword()
        setResetPasswordState('complete')
    }

    return (
        <div style={bgColor} className="size-full w-full h-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center w-96" style={{ marginTop: '-20rem' }}>
                <LineIcon size="150px" />
                <div className="w-96">
                    {resetPasswordState === 'email' &&
                        <form className="mt-10" onSubmit={handleSendOtpButtonClicked}>
                            <ResetEmail email={email} setEmail={setEmail} />
                        </form>
                    }
                    {resetPasswordState === 'otp' &&
                        <form className="flex flex-col mt-10" onSubmit={handleConfirmOtpButtonClicked}>
                            <ResetOtp otp={otp} setOtp={setOtp} />
                        </form>
                    }
                    {resetPasswordState === 'newPassword' &&
                        <form className="flex flex-col mt-10" onSubmit={handleResetPasswordButtonClicked}>
                            <ResetNewPassword
                                password={newPassword}
                                setPassword={setNewPassword}
                                confirmPassword={confirmNewPassword}
                                setConfirmPassword={setConfirmNewPassword} />
                        </form>
                    }
                    {resetPasswordState === 'complete' &&
                        <div className="flex flex-col text-center pt-20">
                            <span className="text-3xl" style={{color: theme.color.primary.text}}>Reset Password Complete</span>
                            <Button type='primary' onClick={() => navigate(RoutePath.LOGIN)} className="mt-4">Back to login</Button>
                        </div>
                    }

                    {errorMessage && <div className="absolute left-0 bottom-0 text-red-500 text-sm" style={{ bottom: '-24px' }}>{errorMessage}</div>}
                </div>
                {resetPasswordState !== 'complete' &&
                    <div className="flex flex-row w-full mt-2.5">
                        <div className="flex-1"></div>
                        <ClickableText className="text-xs" onClick={() => navigate(RoutePath.LOGIN)}>
                            Back to login
                        </ClickableText>
                    </div>
                }
            </div>
            <button onClick={themeContext.toggle} className="relative top-20">Toggle Theme</button>
        </div>
    )
}

export default ResetPasswordPage;