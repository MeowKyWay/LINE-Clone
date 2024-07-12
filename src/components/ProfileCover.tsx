import { StorageImage } from "@aws-amplify/ui-react-storage";
import { useAppSelector } from "../hook";

interface ProfileCoverProps {
    editCoverImg: boolean;
    coverImg: File | null;
}

const ProfileCover: React.FC<ProfileCoverProps> = ({ editCoverImg, coverImg }) => {

    const currentUserCoverImg = useAppSelector(state => state.user.currentUser?.coverImage)

    return (
        <div className="absolute h-full w-full">
            { currentUserCoverImg && !editCoverImg && (
                <StorageImage
                    path={currentUserCoverImg}
                    alt="profile"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
            )}
            {coverImg && editCoverImg && (
                <img
                    src={URL.createObjectURL(coverImg)}
                    alt="profile"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
            )}
        </div>
    );
};

export default ProfileCover;
