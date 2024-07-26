import { StorageImage } from "@aws-amplify/ui-react-storage"

function ProfilePicture({ src, size, onClick, className}: {
    src?: string | null
    size: string
    onClick?: () => void
    className?: string
}) {

    const handleClick = (event : React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        event.stopPropagation();
        onClick && onClick();
    }

    return (
        <div className={`${className} z-10`}>
            {
                src ? <StorageImage 
                    path={src} 
                    onClick={(e) => handleClick(e)} 
                    alt="profile" 
                    className={`object-cover ${onClick ? "cursor-pointer" : ""}`} 
                    style={
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
                    className={`object-cover ${onClick ? "cursor-pointer" : ""}`} 
                    src={'../src/assets/profile.jpeg'} 
                    alt={'Profile'} 
                    onClick={onClick}
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