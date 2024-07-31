import { ReactNode } from "react";
import { Link } from "react-router-dom";

function NavigationButton({ children, link, className }: { children: ReactNode, link: string, className?: string }) {

    return (
        <div className={`flex items-center justify-center w-full ${className}`} style={{ height: '54px' }}>
            <Link to={link}>
                {children}
            </Link>
        </div>
    )
}

export default NavigationButton;