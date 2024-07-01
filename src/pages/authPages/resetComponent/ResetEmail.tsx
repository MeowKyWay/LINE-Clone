import Button from "../../../components/input/Button";
import TextField from "../../../components/input/TextField";

function ResetEmail({ email, setEmail }: {
    email: string,
    setEmail: (value: string) => void
}) {
    return (
        <div className="flex flex-col size-full">
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
        </div>
    )
}

export default ResetEmail;