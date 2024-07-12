import { useNavigate } from "react-router-dom";
import useTheme from "../../theme";
import MoreModalButton from "./MoreModalButton";
import { RoutePath } from "../../RoutePath";
import ModalOverlay from "../Modal/ModalOverlay";
import { useAppDispatch } from "../../hook";
import { logout } from "../../store/thunks/userThunk";

function MoreModal({onClose}: {
    onClose: () => void
}){

    const dispatch = useAppDispatch();

    const theme = useTheme();
    const navigate = useNavigate();

    const handleToggleTheme = () => {
        theme.toggle();
    }

    const handleSignOut = async () => {
        try {
            await dispatch(logout());
            navigate(RoutePath.LOGIN);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ModalOverlay onClose={onClose}>
            <div
                className="fixed rounded text-xs font-light py-2 flex flex-col"
                style={{
                    bottom: '50px',
                    left: '50px',
                    zIndex: 10000,
                    backgroundColor: theme.currentTheme.color.primary.modal,
                    color: theme.currentTheme.color.primary.text,
                }}
            >
                <MoreModalButton onClick={handleToggleTheme}>Toggle theme</MoreModalButton>
                <MoreModalButton onClick={handleSignOut}>Log out</MoreModalButton>
            </div>
        </ModalOverlay>
    )
}

export default MoreModal;