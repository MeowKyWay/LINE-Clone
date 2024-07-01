import Button from "../../../components/input/Button";
import TextField from "../../../components/input/TextField";

function ResetOtp({ otp, setOtp }: {
    otp: string, 
    setOtp: (value: string) => void
} ) {
    return (
        <div className="flex flex-col size-full">
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
                Confirm OTP
            </Button>
        </div>
    )
}

export default ResetOtp;