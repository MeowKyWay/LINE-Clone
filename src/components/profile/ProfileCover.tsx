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
                <StorageImage
                    path='public/cover/default-cover.jpg'
                    alt="profile"
                    className={style}
                    style={{ pointerEvents: "none" }}
                />
            )
            }
        </div>
    );
};

export default ProfileCover;
