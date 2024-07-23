import React, { useState } from "react";
import TextField from "../../../components/input/TextField";
import Button from "../../../components/input/Button";
import { confirmSignUp, resendSignUpCode } from "@aws-amplify/auth";
import Complete from "./Complete";
import { RoutePath } from "../../../RoutePath";

function ConfirmSignUp({ username, setError }: {
    username: string;
    setError: (message: string) => void;
}) {

    const [otp, setOtp] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');

        try {
            const res = await confirmSignUp({
                username: username,
                confirmationCode: otp,
            })
            if (res.isSignUpComplete) {
                setIsComplete(true);
            }
        } catch (error) {
            setError((error as Error).message);
        }
    }

    const handleResend = async () => {
        try {
            await resendSignUpCode({
                username: username,
            })
        } catch (error) {
            setError((error as Error).message);
        }
    }

    return (
        <div>
            {!isComplete &&
                <form className="flex flex-col mt-10 w-full" onSubmit={handleSubmit}>
                    <div className="flex flex-row w-full gap-2">
                        <TextField
                            type="text"
                            value={otp}
                            onChange={setOtp}
                            autoComplete="otp"
                            className="flex-1"
                            name="otp">
                            One time password
                        </TextField>
                        <Button
                            variant="primary"
                            type="button"
                            onClick={handleResend}>
                            Resend
                        </Button>
                    </div>

                    <Button
                        variant={otp ? 'primary' : 'disabled'}
                        className="mt-4">
                        Confirm Sign up
                    </Button>
                </form>
            }
            {isComplete && <Complete to={RoutePath.LOGIN}>Sign up complete</Complete>}
        </div>
    )
}

export default ConfirmSignUp;
