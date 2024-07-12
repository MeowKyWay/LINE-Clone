import { User } from "../API"
import { StorageImage } from "@aws-amplify/ui-react-storage"
import { UserType } from "../store/slice/userSlice"
import { GroupType } from "../store/slice/groupsSlice"

function FriendProfilePicture ({src, size , user}: {
    src?: string
    size: string
    user: User | UserType | GroupType
}) {

    if (!src) {
        src = '../src/assets/profile.jpeg'
    }

    return (
        <div>
            {
                user.image ? <StorageImage path={user.image} alt="profile" style={
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

export default FriendProfilePicture;