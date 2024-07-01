import { useNavigate } from "react-router";
import Button from "../../../components/input/Button";
import { RoutePath } from "../../../RoutePath";
import useTheme from "../../../theme";

function Complete({children}: {children?: string}) {

    const navigate = useNavigate();
    const theme = useTheme().currentTheme;

    return (
        <div className="flex flex-col text-center pt-20">
            <span className="text-3xl" style={{ color: theme.color.primary.text }}>{children}</span>
            <Button type='primary' onClick={() => navigate(RoutePath.LOGIN)} className="mt-4">Back to login</Button>
        </div>
    )
}

export default Complete;