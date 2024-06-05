import { FaUserFriends } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { useAppSelector } from "../hook";
import useTheme from "../theme";



function AddFriendsPage () {
    const themeContext = useTheme();
    const theme = themeContext.currentTheme;

    const friendRecommendationsState = useAppSelector(state => state.states.friendRecommendationsState);

    const circleStyle = {
        borderRadius: '50%',
        width: '32px',
        height: '32px',
        backgroundColor: theme.color.primary.circleColor,
    }

    const iconsStyle = {
        color: theme.color.primary.text
    }

    return (
        <div>
            <div className="flex flex-col w-full">
                <div id="w1" className="flex flex-row cursor-pointer h-12 mt-6">
                    <style>
                    {`
                    #w1:hover {
                        background-color: ${theme.color.tertiary.background};
                    }
                    `}
                    </style>
                    <div className="relative bg-gray-200 flex items-center justify-center ml-6 mt-2"
                     style={circleStyle}>
                        <IoSearchOutline style={iconsStyle}></IoSearchOutline>
                    </div>
                    <p className="ml-3 mt-2" style={iconsStyle}>Friend search</p>
                </div>
                <div id="w2" className="flex flex-row cursor-pointer h-12">
                <style>
                    {`
                    #w2:hover {
                        background-color: ${theme.color.tertiary.background};
                    }
                    `}
                    </style>
                    <div className="relative bg-gray-200 flex items-center justify-center ml-6 mt-2"
                     style={circleStyle}>
                        <FaUserFriends style={iconsStyle}></FaUserFriends>
                    </div>
                    <p className="ml-3 mt-2" style={iconsStyle}>Create a group</p>
                </div>
                <div id="w3" className="flex flex-row cursor-pointer h-12">
                <style>
                    {`
                    #w3:hover {
                        background-color: ${theme.color.tertiary.background};
                    }
                    `}
                    </style>
                    <div className="relative bg-gray-200 flex items-center justify-center ml-6 mt-2"
                     style={circleStyle}>
                        <IoCreateOutline style={iconsStyle}></IoCreateOutline>
                    </div>
                    <p className="ml-3 mt-2" style={iconsStyle}>Create OpenChat</p>
                </div>
            </div>
        </div>
    )
}

export default AddFriendsPage;