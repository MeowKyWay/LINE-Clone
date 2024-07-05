import React, { ChangeEvent } from "react";
import Modal from "../../components/Modal";
import { TiDelete } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";

interface FriendSearchModalProps {
    showModal: boolean;
    onClose: () => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

function FriendSearchModalContent({ onClose, searchTerm, setSearchTerm }: FriendSearchModalProps) {

    const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };


    return (
        <Modal onClose={onClose} top={"12rem"} right={"48rem"} bottom={"12rem"} left={"48rem"}>
            <div>
                <div className="w-full h-12 text-white text-sm flex items-center justify-center text-center" style={{ backgroundColor: "#2d3649" }}>
                    Friend search
                    <button onClick={onClose} className="text-black absolute right-4 font-bold" style={{ color: "#5b6887" }}>
                        x
                    </button>
                </div>
                <div className="w-full h-24 flex items-center justify-center" style={{ backgroundColor: "#eef2f5" }}>
                    <IoSearch className="relative left-6" style={{ color: "#b2b5bf" }}></IoSearch>
                    <input
                        value={searchTerm}
                        onChange={handleSearchTermChange}
                        placeholder="Search by ID"
                        className="bg-white text-xs pl-7 h-8 focus:outline-none"
                        style={{ width: "90%" }}
                    ></input>
                    {searchTerm && (
                        <button onClick={() => setSearchTerm("")} className="absolute right-5">
                            <TiDelete className="relative" size="20px" style={{ color: "#b2b5bf" }}></TiDelete>
                        </button>
                    )}
                </div>
                <div>

                </div>
            </div>
        </Modal>
    );
}

export default FriendSearchModalContent;
