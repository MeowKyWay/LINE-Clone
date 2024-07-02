import useTheme from "../../theme";

function MoreModalButton({ children, onClick }: {
    children: string,
    onClick: () => void
}) {

    const theme = useTheme().currentTheme;

    return (
        <div>
            <style>
                {`
                .button:hover {
                    background-color: ${theme.color.primary.modalHover};
                }
                `}
            </style>
            <div
                className="w-full h-6 cursor-pointer px-4 flex flex-row items-center button"
                onClick={onClick}
            >
                <span>{children}</span>
            </div>
        </div>

    )
}

export default MoreModalButton;