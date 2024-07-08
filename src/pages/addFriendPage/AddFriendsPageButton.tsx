import { ReactNode } from "react";
import useTheme from "../../theme"

function AddFriendsPageButton({ children, label, onClick }: { children: ReactNode, label: string, onClick: () => void }) {

    const theme = useTheme().currentTheme;

    return (
        <div className="h-15 w-full text-sm font-light">
            <style>
                {`
                .button:hover {
                    background-color: ${theme.color.tertiary.background};
                }
                `}
            </style>
            <div
                className="flex flex-row items-center cursor-pointer size-full button"
                onClick={onClick}
                style={{
                    color: theme.color.primary.text,
                }}>
                <div
                    className="flex items-center justify-center size-10 rounded-full ml-5 mr-3"
                    style={{
                        backgroundColor: theme.color.primary.circleColor,
                        fontSize: '25px',
                    }}>
                    {children}
                </div>
                <span>{label}</span>
            </div>
        </div>

    )
}

export default AddFriendsPageButton;