import useTheme from "../../theme";
import Logo from '../../assets/lineLogo.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/input/Button";
import TextField from "../../components/input/TextField";

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
        setOtpSended(true)
    }

    const handleConfirmOtpButtonClicked = async () => {
        //resetPassword()
        setResetPasswordState('newPassword')
    }

    return (
        <div style={bgColor} className="size-full w-full h-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center relative" style={{ marginTop: '-20rem' }}>
                <div>
                    <img src={Logo} style={{ width: '84px', height: '50px', color: '#07b53b' }}></img>
                </div>
                <div className="w-96">
                    {resetPasswordState === 'email' &&
                        <form className="flex flex-col mt-10" onSubmit={handleSendOtpButtonClicked}>
                            <div className="flex flex-row gap-4 w-full">
                                <TextField
                                    type='text'
                                    value={email}
                                    onChange={setEmail}
                                    className="flex-1"
                                >Email</TextField>
                            </div>
                            <Button
                                type={email ? 'primary' : 'disabled'}
                                className="mt-4"
                            >
                                Send
                            </Button>
                        </form>
                    }
                    {resetPasswordState === 'otp' &&
                        <form className="flex flex-col mt-10" onSubmit={handleConfirmOtpButtonClicked}>
                            <div className="flex flex-row gap-4 w-full">
                                <TextField
                                    type='text'
                                    value={otp}
                                    onChange={setOtp}
                                    className="flex-1"
                                >OTP</TextField>
                            </div>
                            <Button
                                type={otp ? 'primary' : 'disabled'}
                                className="mt-4"
                            >
                                Reset Password
                            </Button>
                        </form>
                    }
                    {resetPasswordState === 'newPassword' &&
                        (<div></div>)
                    }
                    {resetPasswordState === 'complete' &&
                        <div className="w-80 h-12 p-4 flex flex-col items-center">
                            <p className="mb-4" style={textColor}>Reset Complete</p>
                            <div className="bg-green-500 text-white w-80 h-12 p-4 text-center cursor-pointer" onClick={handleToLoginClick}>
                                Back to Log in
                            </div>
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