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
                <StorageImage 
                    path='public/profile/profile.jpeg'
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
                        
                    }}/>

            }
        </div>
    )
}

export default ProfilePicture;