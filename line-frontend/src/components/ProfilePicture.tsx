function ProfilePicture ({src, size}: {
    src?: string
    size: string
}) {

    if (!src) {
        src = '../src/assets/profile.jpeg'
    }

    const style = {
        width: size,
        height: size,
        borderRadius: '50%',
    }

    return (
        <div>
            <img className="object-cover" src={src} alt={'Profile'} style={style}></img>
        </div>
    )
}

export default ProfilePicture;