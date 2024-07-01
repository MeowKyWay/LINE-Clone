import React, { useState } from "react";
import TextField from "../../../components/input/TextField";
import Button from "../../../components/input/Button";
import { confirmSignUp } from "@aws-amplify/auth";
import Complete from "./Complete";

function ConfirmSignUp({ email }: {
    email: string;
}) {

    const [otp, setOtp] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const res = await confirmSignUp({
            username: email,
            confirmationCode: otp,
        })

        if (res.isSignUpComplete) {
            setIsComplete(true);
        }
    }

    return (
        <div>
            {!isComplete &&
                <form className="flex flex-col mt-10 w-full" onSubmit={handleSubmit}>
                    <TextField
                        type="text"
                        value={otp}
                        onChange={setOtp}
                        className="border-0 border-b rounded-b-none"
                        autoComplete="username"
                        name="username">
                        Username
                    </TextField>
                    <Button
                        type={otp ? 'primary' : 'disabled'}
                        className="mt-4">
                        Confirm Sign up
                    </Button>
                </form>
            }
            {isComplete && <Complete>Sign up complete</Complete>}
        </div>
    )
}

export default ConfirmSignUp;
