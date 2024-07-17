import { IoIosArrowBack } from "react-icons/io";
import useTheme from "../../../theme";
import { useAppSelector } from "../../../hook";
import ProfilePicture from "../../../components/ProfilePicture";
import ProfileCover from "../../../components/ProfileCover";
import { IoPencilOutline } from "react-icons/io5";
import EditStatusMessage from "./EditStatusMessage";
import { useState } from "react";
import EditProfileImage from "./EditProfileImage";
import UploadImageButton from "../../../components/input/UploadImgButton";


function ProfileSettingModal({setSetting , setEditStatus , editStatus} :
     {  setSetting : React.Dispatch<React.SetStateAction<boolean>> , 
        setEditStatus : React.Dispatch<React.SetStateAction<boolean>> , 
        editStatus: boolean}){

    const [type , setType ] = useState("")
    const [img , setImg] = useState<File | null>(null)
    const [coverImg, setCoverImg] = useState<File | null>(null)    
    const [editImgType , setEditImgType] = useState<"profile" | "cover" | null>(null)
    const theme = useTheme().currentTheme;
    const currentUser = useAppSelector(state => state.user.currentUser)
    const textStyle = { color: theme.color.tertiary.text }

    const onImageChange = (e: React.ChangeEvent<HTMLInputElement>, isCover = false) => {
        const fileUploaded = e.target.files ? e.target.files[0] : null;
        if (!fileUploaded) return;
        if (isCover) {
            setCoverImg(fileUploaded);
            setEditImgType("cover")
        } else {
            setImg(fileUploaded);
            setEditImgType("profile")
        }
    };

    return(
        <div className="flex flex-col relative h-screen">
            {
                //update username & statusMessage
                editStatus ? (
                    <div className="flex flex-col w-full items-center">
                        <ProfileCover editCoverImg={false} className="w-full h-full opacity-50"></ProfileCover>
                        <div className="flex mt-48">
                            <EditStatusMessage setEditStatus={setEditStatus} type={type}></EditStatusMessage>
                        </div>
                    </div>)
             :
            
             //update profileImg & coverImg
             editImgType ? (
                    <div className="flex flex-col w-full items-center">
                        <ProfileCover 
                            coverImg={coverImg} 
                            editCoverImg={editImgType === "cover" ? true : false } 
                            className="w-full h-full opacity-50"/>
                        <div className="flex mt-48">
                            <EditProfileImage 
                                setEditImg={() => setEditImgType(null)} 
                                image={editImgType === "cover" ? coverImg : img} 
                                isCoverImg={editImgType === "cover"}/>
                        </div>
                    </div>
             )

            :
            <div>
                        <IoIosArrowBack
                        onClick={() => setSetting(false)}
                        className="cursor-pointer relative m-2"
                        style={{ color: theme.color.tertiary.text }} />

                        <div className="relative flex flex-col items-center mx-4 rounded-lg h-28" id="img">
                            <ProfileCover editCoverImg={false} className="rounded-lg h-full w-full"></ProfileCover>
                            <div className="relative flex items-center mt-6">
                                <ProfilePicture src={currentUser?.image} size="64px"></ProfilePicture>
                                <div className="absolute" style={{right: "0rem" , top: "3rem"}}>
                                <UploadImageButton onImageChange={onImageChange}></UploadImageButton>
                                </div>
                            </div>
                            <UploadImageButton onImageChange={(e) => onImageChange(e, true)} className="absolute right-2 bottom-2"></UploadImageButton>
                        </div>

                        <div className="flex flex-col ml-4 gap-y-4 text-sm mt-4" style={{ color: theme.color.primary.text }} id="content">
                            <div>
                                <div style={textStyle}>Display name</div>
                                <div className="flex flex-row items-center cursor-pointer">{currentUser?.name}
                                    <IoPencilOutline size="12px" className="ml-1" onClick={() => {setEditStatus(true); setType("username")}}/>
                                </div>
                            </div>
                            <div>
                                <div style={textStyle}>Status message</div>
                                <div className="flex flex-row items-center cursor-pointer">{currentUser?.statusMessage}
                                    <IoPencilOutline size="12px" className="ml-1" onClick={() => {setEditStatus(true); setType("statusMessage")}}/>
                                </div>
                            </div>
                            <div>
                                <div style={textStyle}>Line ID</div>
                                <div>{currentUser?.lineID}</div>
                            </div>
                            <div>
                                <div style={textStyle}>Email</div>
                                <div>{currentUser?.email}</div>
                            </div>

                        </div></div>
}
        </div>
    )
}

export default ProfileSettingModal;