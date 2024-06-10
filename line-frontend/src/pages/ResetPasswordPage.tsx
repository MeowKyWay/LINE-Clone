import useTheme from "../theme";
import Logo from '../assets/lineLogo.png'
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";

function ResetPasswordPage(){
    const theme = useTheme().currentTheme;
    const themeContext = useTheme();
    const [confirmPassEmail , setConfirmPassEmail] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [confirmPassEmailComplete , setConfirmPassEmailComplete] = useState(false)
    const [resetComplete , setResetComplete] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()


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

    const inputColorMiddle = {
        ...inputStyle,
        borderTop: 'none', // Remove the top border to avoid intersection
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

    const handleEmailSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(validateEmail(confirmPassEmail)){
            setConfirmPassEmailComplete(true);
        }
        else{
            event.currentTarget.querySelector('input')?.blur();
            setErrorMessage("Please enter a valid email address.")
        }
    };

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(newPassword === confirmNewPassword)
        {
            setErrorMessage('')
            setResetComplete(true)
        }
        else{
            const inputs = event.currentTarget.querySelectorAll('input');
            inputs.forEach((input: HTMLInputElement) => input.blur());
            setErrorMessage('newPassword do not match.')
        }
    }

    const handleToLoginClick = () => {
        navigate('/login')
    }

    const validateEmail = (input : string) : boolean => {
        // Basic email validation using regex
        const regex: RegExp = /^(?:(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)|(?:".+"))@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?)$/;
        return regex.test(input);
      };

    return(
        <div style={bgColor} className="size-full w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center relative" style={{marginTop:'-20rem'}}>
            <div>
                <img src={Logo} style={{width:'84px',height:'50px', color:'#07b53b'}}></img>
            </div>
            {!confirmPassEmailComplete ? (
                    <form className="flex flex-col mt-10" onSubmit={handleEmailSubmit}>
                        <div className="border rounded" style={{borderColor: errorMessage ? 'red' : 'none' , borderStyle: errorMessage ? 'solid' : 'none'}}>
                        <input
                            placeholder="Enter your email"
                            className="w-80 border h-12 p-4 block border rounded"
                            style={inputStyle}
                            value={confirmPassEmail}
                            onChange={(e) => {
                                setConfirmPassEmail(e.target.value);
                                setErrorMessage('')
                            }}
                            required
                        />
                        </div>
                        {confirmPassEmail ? (
                            <button className="text-white rounded mt-2 h-12" style={{ backgroundColor: '#43b453' }}>
                                Send Reset Password Link
                            </button>
                        ) : (
                            <button className="text-white rounded mt-2 h-12" style={{ backgroundColor: '#b7b7b7' }} disabled>
                                Send Reset Password Link
                            </button>
                        )}
                    </form>
                ) : !resetComplete ? (
                    <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
                        <div className="border rounded" style={{ borderColor: errorMessage ? 'red' : 'none', borderStyle: errorMessage ? 'solid' : 'none' }}>
                            <PasswordInput
                                placeholder="Old password"
                                style={inputColorTop}
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                required
                            />
                            <PasswordInput
                                placeholder="New password"
                                style={inputColorMiddle}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                            <PasswordInput
                                placeholder="Confirm new password"
                                style={inputColorBottom}
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                required
                            />
                        </div>
                        {oldPassword && newPassword && confirmNewPassword ? (
                            <button className="text-white rounded mt-2 h-12" style={{ backgroundColor: '#43b453' }}>
                                Reset password
                            </button>
                        ) : (
                            <button className="text-white rounded mt-2 h-12" style={{ backgroundColor: '#b7b7b7' }} disabled>
                                Reset password
                            </button>
                        )}
                    </form>
                ) : (
                    <div className="w-80 h-12 p-4 flex flex-col items-center">
                        <p className="mb-4" style={textColor}>Reset Complete</p>
                        <div className="bg-green-500 text-white w-80 h-12 p-4 text-center cursor-pointer" onClick={handleToLoginClick}>
                            Back to Log in
                        </div>
                    </div>
                )}
            {errorMessage && <div className="absolute left-0 bottom-0 text-red-500 text-sm" style={{bottom: '-24px'}}>{errorMessage}</div>}
        </div>
        <button onClick={themeContext.toggle} className="relative top-20">Toggle Theme</button>
    </div>
    )
}

export default ResetPasswordPage;