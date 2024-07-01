import Button from "../../../components/input/Button";
import TextField from "../../../components/input/TextField";
import useTheme from "../../../theme";

function ResetNewPassword({ password, setPassword, confirmPassword, setConfirmPassword }: {
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
                    className="border-0 border-b rounded-b-none"
                >new password</TextField>
                <TextField
                    type='password'
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                    className="border-0 rounded-t-none"
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

export default ResetNewPassword;