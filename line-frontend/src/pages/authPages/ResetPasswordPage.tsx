import useTheme from "../../theme";
import Logo from '../../assets/lineLogo.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/input/Button";
import TextField from "../../components/input/TextField";
import ResetEmail from "./resetComponent/ResetEmail";
import ResetOtp from "./resetComponent/ResetOtp";
import ResetNewPassword from "./resetComponent/ResetNewPassword";

type ResetPasswordState = 'email' | 'otp' | 'newPassword' | 'complete';

function ResetPasswordPage() {

    const theme = useTheme().currentTheme;
    const themeContext = useTheme();

    const [resetPasswordState, setResetPasswordState] = useState<ResetPasswordState>('email');
    const [otpSended, setOtpSended] = useState(false)

    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()


    const bgColor = {
        backgroundColor: theme.color.primary.background
    }

    const textColor = {
        color: theme.color.tertiary.text
    }

    const handleToLoginClick = () => {
        navigate('/login')
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
            <div className="flex flex-col items-center relative" style={{ marginTop: '-20rem' }}>
                <div>
                    <img src={Logo} style={{ width: '84px', height: '50px', color: '#07b53b' }}></img>
                </div>
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
                        <div className="flex flex-col">
                            <span>Reset Password Complete</span>
                            <Button type='primary' onClick={handleToLoginClick} className="mt-4">To Login</Button>
                        </div>
                    }

                    {errorMessage && <div className="absolute left-0 bottom-0 text-red-500 text-sm" style={{ bottom: '-24px' }}>{errorMessage}</div>}
                </div>
            </div>
            <button onClick={themeContext.toggle} className="relative top-20">Toggle Theme</button>
        </div>
    )
}

export default ResetPasswordPage;