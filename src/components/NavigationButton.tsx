import { ReactNode } from "react";
import { Link } from "react-router-dom";

function NavigationButton({ children, link }: { children: ReactNode, link: string }) {

    return (
        <div className="flex items-center justify-center w-full" style={{ height: '54px' }}>
            <Link to={link}>
                {children}
            </Link>
        </div>
    )
}

export default NavigationButton;