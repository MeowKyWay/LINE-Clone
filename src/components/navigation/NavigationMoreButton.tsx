import { IoIosMore } from "react-icons/io";
import MoreModal from "./MoreModal";

function NavigationMoreButton() {

    return (
        <div className="relative">
            <button>
                <IoIosMore size={22} className="inactive" />
            </button>
            <MoreModal />
        </div>

    )
}

export default NavigationMoreButton;