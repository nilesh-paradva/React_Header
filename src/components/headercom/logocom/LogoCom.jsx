import '../../../App.css'
import Logo from "../../../assets/logocom/Logo2.webp"


const LogoCom = () => {
    return (
        <div className="col-2">
            <div className="logo">
                <img src={Logo} alt="" className='logo-image'/>
            </div>
        </div>
    )
}

export default LogoCom