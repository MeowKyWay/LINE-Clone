import useTheme from "../../theme";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TextField from "../../components/input/TextField";
import Button from "../../components/input/Button";
import ClickableText from "../../components/input/ClickableText";
import LineIcon from "../../components/LineIcon";
import { RoutePath } from "../../RoutePath";
import { signIn, signOut, getCurrentUser } from "@aws-amplify/auth";

function LoginPage() {

    const theme = useTheme().currentTheme;
    const themeContext = useTheme();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== RoutePath.LOGIN) //In case of no pathname, redirect to login page
            navigate(RoutePath.LOGIN);
    });

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await getCurrentUser();
                navigate(RoutePath.FRIENDS);
            }
            catch (e) {
                console.log('Unauthorized')
            }
                
        }
        checkAuth();
    });


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await signOut();

        try {
            const res = await signIn({
                username: email,
                password: password
            })
            if (res.isSignedIn) {
                navigate(RoutePath.FRIENDS);
            }
        }
        catch (e) {
            setErrorMessage((e as Error).message);
        }
    }

    return (
        <div style={{ backgroundColor: theme.color.primary.background }}
            className="w-full h-full flex flex-col items-center">
            <div className="flex flex-col items-center mt-20">
                <LineIcon size="150px" />
                <div className="w-96">
                    <form className="flex flex-col mt-10 w-full" onSubmit={handleSubmit}>
                        <div className="border rounded" style={{
                            border: '1px solid',
                            borderColor: errorMessage ? theme.color.primary.error : theme.color.primary.inputBorderColor,
                        }}>
                            <TextField
                                type="text"
                                value={email}
                                onChange={setEmail}
                                className="border-0 border-b rounded-b-none">
                                Email
                            </TextField>
                            <TextField
                                type="password"
                                value={password}
                                onChange={setPassword}
                                className="border-0 rounded-t-none">
                                Password
                            </TextField>
                        </div>
                        <Button
                            variant={email && password ? 'primary' : 'disabled'}
                            className="mt-4">
                            Login
                        </Button>
                    </form>
                    <div className="flex flex-row w-full mt-2.5">
                        <ClickableText className="text-xs" onClick={() => navigate(RoutePath.REGISTER)}>
                            Don't have an account?
                        </ClickableText>
                        <div className="flex-1"></div>
                        <ClickableText className="text-xs" onClick={() => navigate(RoutePath.RESET_PASSWORD)}>
                            Reset password
                        </ClickableText>
                    </div>
                    <span className="mt-2.5 text-xs font-light" style={{ color: theme.color.primary.error }}>
                        {errorMessage}
                    </span>
                </div>
            </div>
            <button onClick={themeContext.toggle}>Toggle Theme</button>
        </div>
    )
}

export default LoginPage;
