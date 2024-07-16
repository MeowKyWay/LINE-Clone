import { StorageImage } from "@aws-amplify/ui-react-storage";
import { useAppSelector } from "../hook";
import classNames from "classnames";

interface ProfileCoverProps {
    editCoverImg?: boolean;
    coverImg?: File | null;
    className?: string;
}

const ProfileCover: React.FC<ProfileCoverProps> = ({ editCoverImg, coverImg , className}) => {

    const currentUserCoverImg = useAppSelector(state => state.user.currentUser?.coverImage)
    const style = classNames("absolute inset-0 object-cover z-0 " + className)    

    return (
        <div className="absolute h-full w-full">
            { (currentUserCoverImg && !editCoverImg) ? (
                <StorageImage
                    path={currentUserCoverImg}
                    alt="profile"
                    className={style}
                    style={{pointerEvents: "none"}}
                />
            )
            : (coverImg && editCoverImg) ? (
                <img
                    src={URL.createObjectURL(coverImg)}
                    alt="profile"
                    className={style}
                />
            )
            : (
                //default coverImg
                <img src={'../src/assets/default-cover.jpg'} alt="default-cover" className={style}/>
            )
            
            }
        </div>
    );
};

export default ProfileCover;
