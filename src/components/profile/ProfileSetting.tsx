import { useAppDispatch, useAppSelector } from "../../hook";
import ProfileCover from "./ProfileCover";
import ProfilePicture from "./ProfilePicture";
import ImageInput from "../input/ImageInput";
import { updateUserProfile, uploadUserCoverImage, uploadUserProfileImage } from "../../store/thunks/userThunk";
import { uploadImg } from "../../store/thunks/imagesThunk";
import useTheme from "../../theme";
import { IoPencilSharp } from "react-icons/io5";
import { useState } from "react";
import LabelInput from "../input/LabelInput";
import Button from "../input/Button";


function ProfileSetting() {
    const dispatch = useAppDispatch();

    const theme = useTheme().currentTheme;

    const currentUser = useAppSelector(state => state.user.currentUser);
    
    const [editDisplayName, setEditDisplayName] = useState(false);
    const [editStatusMessage, setEditStatusMessage] = useState(false);
    const [displayName, setDisplayName] = useState(currentUser?.name);
    const [statusMessage, setStatusMessage] = useState(currentUser?.statusMessage);

    const handleChangeProfileImage = async (image: File | null) => {
        console.log(image)
        if (!image) return;
        const filename = `public/profile/${currentUser?.lineID}`
        console.log("filename:", filename);
        await dispatch(uploadImg({ filename, image }))
        await dispatch(uploadUserProfileImage(filename))
    }

    const handleChangeCoverImage = async (image: File | null) => {
        console.log(image)
        if (!image) return;
        const filename = `public/cover/${image.name}`
        console.log("filename:", filename);
        await dispatch(uploadImg({ filename, image }))
        await dispatch(uploadUserCoverImage(filename))
    }

    const handleSaveChange = async () => {
        await dispatch(updateUserProfile({ name: displayName as string, statusMessage: statusMessage as string }))
        setEditDisplayName(false);
        setEditStatusMessage(false);
    }

    const handleCancleChange = () => {
        setEditDisplayName(false);
        setEditStatusMessage(false);
        setDisplayName(currentUser?.name);
        setStatusMessage(currentUser?.statusMessage);
    }

    const titleStyle = {color: theme.color.tertiary.text,}
    const titleClassName = "text-xs font-light"
    const contentStyle = {color: theme.color.primary.text,}
    const contentClassName = "text-xs"

    return (
        <div className="flex flex-col p-4 size-full">
            <div className="relative flex flex-col items-center justify-center h-30">
                <ProfileCover image={currentUser?.coverImage as string} className="h-30 w-full opacity-50 rounded-xl" />
                <div className="relative size-20 z-0">
                    <ProfilePicture size="80px" src={currentUser?.image as string} className="z-10" />
                    <ImageInput setImage={handleChangeProfileImage} className="z-20 absolute right-0.5 bottom-0.5"></ImageInput>
                </div>
                <ImageInput setImage={handleChangeCoverImage} className="z-20 absolute right-2 bottom-2"></ImageInput>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-col">
                    <span className={titleClassName} style={titleStyle}>Display name</span>
                    <div className="flex flex-row items-center gap-1">
                        {editDisplayName ?
                            <LabelInput value={displayName as string} onChange={setDisplayName}
                                className={contentClassName} style={contentStyle} /> :
                            <span className={contentClassName} style={contentStyle}>{currentUser?.name}</span>
                        }
                        {!editDisplayName &&
                            <IoPencilSharp className="cursor-pointer" size="12px" color={theme.color.tertiary.text}
                                onClick={() => setEditDisplayName(true)} />
                        }
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className={titleClassName} style={titleStyle}>Status message</span>
                    <div className="flex flex-row items-center gap-1">
                        {editStatusMessage ?
                            <LabelInput value={statusMessage as string} onChange={setStatusMessage}
                                className={contentClassName} style={contentStyle} /> :
                            <span className={contentClassName} style={contentStyle}>{currentUser?.statusMessage}</span>
                        }
                        {!editStatusMessage &&
                            <IoPencilSharp className="cursor-pointer" size="12px" color={theme.color.tertiary.text}
                                onClick={() => setEditStatusMessage(true)} />
                        }
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className={titleClassName} style={titleStyle}>LINE ID</span>
                    <span className={contentClassName} style={contentStyle}>{currentUser?.lineID}</span>
                </div>
                <div className="flex flex-col">
                    <span className={titleClassName} style={titleStyle}>Email</span>
                    <span className={contentClassName} style={contentStyle}>{currentUser?.email}</span>
                </div>
            </div>
            <div className="flex-1 w-full"/>
            {(editDisplayName || editStatusMessage) &&
                <div className="flex flex-row items-center justify-center gap-4">
                    <Button type="button" variant="primary" onClick={handleSaveChange} className="h-8">
                        Save
                    </Button>
                    <Button type="button" variant="secondary" onClick={handleCancleChange} className="h-8">
                        Cancel
                    </Button>
                </div>
            }
        </div>
    )
}

export default ProfileSetting;