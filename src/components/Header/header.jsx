import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';
import Headercss from '../Header/header.module.css'

function Header(){
    return(
        <header className={Headercss.header}>
            <div>
                <Link to="/">
                  <img src={Logo} alt= "Logo KASA" className={Headercss.img}/> 
                </Link>
            </div>
            <nav className={Headercss.nav}>
                <Link className={Headercss.linkNav} to="/">Accueil</Link>
                <Link className={Headercss.linkNav} to="/about">A Propos</Link>
            </nav>
        </header>
    )
}
export default Header;