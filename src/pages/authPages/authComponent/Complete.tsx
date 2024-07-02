import { useNavigate } from "react-router";
import Button from "../../../components/input/Button";
import { RoutePath } from "../../../RoutePath";
import useTheme from "../../../theme";

function Complete({to, children}: {
    to: RoutePath,
    children?: string
}) {

    const navigate = useNavigate();
    const theme = useTheme().currentTheme;

    return (
        <div className="flex flex-col text-center pt-20">
            <span className="text-3xl" style={{ color: theme.color.primary.text }}>{children}</span>
            <Button type='primary' onClick={() => navigate(to)} className="mt-4">Continue</Button>
        </div>
    )
}

export default Complete;