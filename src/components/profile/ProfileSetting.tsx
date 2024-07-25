import { useAppDispatch, useAppSelector } from "../../hook";
import ProfileCover from "./ProfileCover";
import ProfilePicture from "./ProfilePicture";
import ImageInput from "../input/ImageInput";
import { fetchUser, uploadUserCoverImage, uploadUserProfileImage } from "../../store/thunks/userThunk";
import { uploadImg } from "../../store/thunks/imagesThunk";


function ProfileSetting() {
    const dispatch = useAppDispatch();

    const currentUser = useAppSelector(state => state.user.currentUser)

    const handleChangeProfileImage = async (image: File | null) => {
        console.log(image)
        if (!image) return;
        const filename = `public/profile/${currentUser?.lineID}`
        console.log("filename:", filename);
        await dispatch(uploadImg({ filename, image }))
        await dispatch(uploadUserProfileImage(filename))
        setTimeout(() => {
            dispatch(fetchUser())
        }, 1000); // 1000 milliseconds = 1 second
    }

    const handleChangeCoverImage = async (image: File | null) => {
        console.log(image)
        if (!image) return;
        const filename = `public/cover/${currentUser?.lineID}`
        console.log("filename:", filename);
        await dispatch(uploadImg({ filename, image }))
        await dispatch(uploadUserCoverImage(filename))
        setTimeout(() => {
            dispatch(fetchUser())
        }, 1000); // 1000 milliseconds = 1 second
    }

    return (
        <div className="flex flex-col p-4">
            <div className="relative flex flex-col items-center justify-center h-30">
                <ProfileCover image={currentUser?.coverImage as string} className="h-30 w-full opacity-50 rounded-xl" />
                <div className="relative size-20 z-0">
                    <ProfilePicture size="80px" src={currentUser?.image as string} className="z-10" />
                    <ImageInput setImage={handleChangeProfileImage} className="z-20 absolute right-0.5 bottom-0.5"></ImageInput>
                </div>
                <ImageInput setImage={handleChangeCoverImage} className="z-20 absolute right-2 bottom-2"></ImageInput>
            </div>
        </div>
    )
}

export default ProfileSetting;