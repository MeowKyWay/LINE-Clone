import Logo from '../../assets/lineLogo.png'

function LineIcon(size: string) {
    return (
        <div>
            <img src={Logo} style={{ width: size, color: '#07b53b' }}></img>
        </div>
    )
}

export default LineIcon;