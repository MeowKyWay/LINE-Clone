import { MdExpandLess, MdExpandMore } from "react-icons/md";
import useTheme from "../theme"

function ExpandListButton({label, value, size, onClick}: {
    label: string, 
    value: boolean, 
    size: number, 
    onClick: () => void
}) {

    const theme = useTheme().currentTheme;

    return (
        <div
            className="w-full h-8 flex flex-row items-center font-light px-5"
            style={{
                color: theme.color.tertiary.text,
                fontSize: '12px'
            }}>
            <button onClick={onClick} className="w-full h-4 flex flex-row items-center">
                <span className="flex-1 text-left">{label} {size}</span>
                {(value && <MdExpandLess size={20} />) || (!value) && <MdExpandMore size={20} />}
            </button>
        </div>
    )
}

export default ExpandListButton;