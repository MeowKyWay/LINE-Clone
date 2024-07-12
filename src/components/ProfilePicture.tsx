import { StorageImage } from "@aws-amplify/ui-react-storage"

function ProfilePicture ({src, size}: {
    src?: string | null
    size: string
}) {

    return (
        <div>
            {
                src ? <StorageImage path={src} alt="profile" className="object-cover" style={
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
                src={'../src/assets/profile.jpeg'} 
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