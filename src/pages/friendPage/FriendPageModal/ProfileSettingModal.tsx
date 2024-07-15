import { IoIosArrowBack } from "react-icons/io";
import useTheme from "../../../theme";
import { useAppSelector } from "../../../hook";
import ProfilePicture from "../../../components/ProfilePicture";
import ProfileCover from "../../../components/ProfileCover";
import { IoPencilOutline } from "react-icons/io5";
import EditStatusMessage from "./EditStatusMessage";
import { useState } from "react";


function ProfileSettingModal({setSetting , setEditStatus , editStatus} :
     {  setSetting : React.Dispatch<React.SetStateAction<boolean>> , 
        setEditStatus : React.Dispatch<React.SetStateAction<boolean>> , 
        editStatus: boolean}){

    const [type , setType ] = useState("")
    const theme = useTheme().currentTheme;
    const currentUser = useAppSelector(state => state.user.currentUser)

    return(
        <div className="flex flex-col relative h-screen">
            {
                editStatus ? (
                    <div className="flex flex-col w-full items-center">
                        <ProfileCover editCoverImg={false} className="w-full h-full"></ProfileCover>
                        <div className="flex absolute mt-48">
                        <EditStatusMessage setEditStatus={setEditStatus} type={type}></EditStatusMessage>
                        </div>
                    </div>)
             :
            <>
                        <IoIosArrowBack
                        onClick={() => setSetting(false)}
                        className="cursor-pointer relative m-2"
                        style={{ color: theme.color.tertiary.text }} />
                        <div className="relative h-2 flex flex-col items-center mx-4 rounded-lg mb-12" id="img">
                            <ProfileCover editCoverImg={false} className="rounded-lg h-28 w-full"></ProfileCover>
                            <div className="relative flex items-center mt-4">
                                <ProfilePicture src={currentUser?.image} size="64px"></ProfilePicture>
                            </div>
                        </div><div className="flex flex-col ml-4 gap-y-4 text-sm mt-16" style={{ color: theme.color.primary.text }} id="content">
                            <div>
                                <div style={{ color: theme.color.tertiary.text }}>Display name</div>
                                <div className="flex flex-row items-center cursor-pointer">{currentUser?.name}
                                    <IoPencilOutline size="12px" className="ml-1" onClick={() => {setEditStatus(true); setType("username")}}/>
                                </div>
                            </div>
                            <div>
                                <div style={{ color: theme.color.tertiary.text }}>Status message</div>
                                <div className="flex flex-row items-center cursor-pointer">{currentUser?.statusMessage}
                                    <IoPencilOutline size="12px" className="ml-1" onClick={() => {setEditStatus(true); setType("statusMessage")}}/>
                                </div>
                            </div>
                            <div>
                                <div style={{ color: theme.color.tertiary.text }}>Line ID</div>
                                <div>{currentUser?.lineID}</div>
                            </div>
                            <div>
                                <div style={{ color: theme.color.tertiary.text }}>Email</div>
                                <div>{currentUser?.email}</div>
                            </div>

                        </div></>
}
        </div>
    )
}

export default ProfileSettingModal;