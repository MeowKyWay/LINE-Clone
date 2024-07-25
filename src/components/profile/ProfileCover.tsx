import { StorageImage } from "@aws-amplify/ui-react-storage";
import classNames from "classnames";

const ProfileCover = ({ image, className }: {
    image?: string
    className?: string
}) => {

    const style = classNames("size-full object-cover z-1 " + className)

    return (
        <div className="absolute inset-0 z-0">
            {image ? (
                <StorageImage
                    path={image}
                    alt="profile"
                    className={style}
                    style={{ pointerEvents: "none" }}
                />
            ) : (
                //default coverImg
                <img src={'../src/assets/default-cover.jpg'} alt="default-cover" className={style} />
            )
            }
        </div>
    );
};

export default ProfileCover;
