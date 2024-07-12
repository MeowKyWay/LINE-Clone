import { useAppSelector } from "../hook"
import { StorageImage } from "@aws-amplify/ui-react-storage"

function ProfilePicture ({src, size}: {
    src?: string
    size: string
}) {

    const currentUser = useAppSelector(state => state.user.currentUser)

    if (!src) {
        src = '../src/assets/profile.jpeg'
    }

    return (
        <div>
            {
                currentUser?.image ? <StorageImage path={currentUser.image} alt="profile" style={
                    {
                        width: size,
                        height: size,
                        minWidth: size,
                        minHeight: size,
                        borderRadius: '50%',
                    }
                }/>

                :

                <img 
                className="object-cover" 
                src={src} 
                alt={'Profile'} 
                style={{
                    width: size,
                    height: size,
                    minWidth: size,
                    minHeight: size,
                    borderRadius: '50%',
                }}
            ></img>
            }
        </div>
    )
}

export default ProfilePicture;