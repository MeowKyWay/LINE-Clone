import React from "react";

function ModalOverlay({ children, onClose }: {
    children: React.ReactNode;
    onClose: () => void;
}) {

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        onClose();
    }

    return (
        <div
            className="fixed inset-0"
            style={{zIndex: 9999}}
            onClick={(e) => handleClick(e)}
        >{children}
        </div>
    )
}

export default ModalOverlay;