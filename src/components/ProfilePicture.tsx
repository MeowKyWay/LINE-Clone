function ProfilePicture ({src, size}: {
    src?: string
    size: string
}) {
    if (!src) {
        src = '../src/assets/profile.jpeg'
    }

    return (
        <div>
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
        </div>
    )
}

export default ProfilePicture;