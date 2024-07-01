import Button from "../../../components/input/Button";
import TextField from "../../../components/input/TextField";
import useTheme from "../../../theme";

function ResetOtp({ password, setPassword, confirmPassword, setConfirmPassword }: {
    password: string,
    setPassword: (value: string) => void,
    confirmPassword: string,
    setConfirmPassword: (value: string) => void
}) {

    const theme = useTheme().currentTheme;

    return (
        <div className="flex flex-col size-full">
            <div className="flex flex-col w-full border rounded" style={{borderColor: theme.color.primary.inputBorderColor}}>
                <TextField
                    type='password'
                    value={password}
                    onChange={setPassword}
                    className="flex-1 border-none border-b rounded-b-none"
                >new password</TextField>
                <TextField
                    type='password'
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                    className="flex-1 border-none rounded-t-none"
                >confirm password</TextField>
            </div>
            <Button
                type={password === confirmPassword && password ? 'primary' : 'disabled'}
                className="mt-4"
            >
                Reset Password
            </Button>
        </div>
    )
}

export default ResetOtp;