import { IoIosMore } from "react-icons/io";
import MoreModal from "./MoreModal";
import { useState } from "react";

function NavigationMoreButton() {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="relative">
            <button onClick={() => setShowModal(true)}>
                <IoIosMore size={22} className="inactive" />
            </button>
            { showModal &&
                <MoreModal onClose={() => setShowModal(false)} />
            }
        </div>

    )
}

export default NavigationMoreButton;