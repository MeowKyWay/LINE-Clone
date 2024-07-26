import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import SearchField from "./input/SearchField";
import { useAppDispatch , useAppSelector } from "../hook";
import { setMessagesTerms } from "../store/slice/termsSlice";
import useTheme from "../theme";
import { Message } from "../API";

interface SearchMessagesProps {
    showSearchField: boolean;
    setShowSearchField: (show: boolean) => void;
    messages: Message[];
}

const SearchMessages: React.FC<SearchMessagesProps> = ({
    showSearchField,
    setShowSearchField,
    messages,
}) => {
    const theme = useTheme().currentTheme;
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state) => state.terms.messagesTerm);
    const [termCount, setTermCount] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(1);

    useEffect(() => {
        if (searchTerm && showSearchField) {
            const regex = new RegExp(`(${searchTerm})`, "gi");
            const count = messages.reduce(
                (acc, message) => acc + (message.content.match(regex) || []).length,
                0
            );
            setTermCount(count);
        } else {
            setTermCount(0);
        }
    }, [searchTerm, showSearchField, messages]);

    useEffect(() => {
        if (currentIndex > 0 && showSearchField) {
            const container = document.querySelector('#chat-container');
            if (!container) return;
            const matches = Array.from(container.querySelectorAll('.highlight'));
            if (matches.length > 0 && matches[currentIndex - 1]) {
                matches[currentIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, [currentIndex]);

    const handlePrevious = () => {
        setCurrentIndex(currentIndex <= 1 ? 1 : currentIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex(currentIndex => currentIndex >= termCount ? termCount : currentIndex + 1);
    };

    return (
        <div className="flex items-center ml-4" style={{ marginBottom: "10px" }}>
            <SearchField
                placeholder="search messages"
                round
                height="36px"
                width="90%"
                value={searchTerm}
                onChange={(value) => dispatch(setMessagesTerms(value))}
            />
            <IoClose
                style={{ color: theme.color.primary.text }}
                className="ml-2 cursor-pointer"
                onClick={() => setShowSearchField(!showSearchField)}
            />
            {termCount !== 0 && (
                <div style={{ color: theme.color.primary.text }} className="ml-2 text-xs">
                    {currentIndex}/{termCount}
                </div>
            )}

            {showSearchField && termCount > 0 && (
                <div className="flex items-center justify-center ml-2 gap-x-1">
                    <IoIosArrowUp
                        onClick={currentIndex > 1 ? handlePrevious : undefined}
                        style={{ color: theme.color.primary.icon }}
                        className={`cursor-pointer ${currentIndex <= 1 ? "text-gray-400" : "text-black"}`}
                    />
                    <IoIosArrowDown
                        onClick={currentIndex < termCount ? handleNext : undefined}
                        style={{ color: theme.color.primary.icon }}
                        className={`cursor-pointer ${currentIndex >= termCount ? "text-gray-400" : "text-black"}`}
                    />
                </div>
            )}
        </div>
    );
};

export default SearchMessages;
