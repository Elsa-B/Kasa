import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';

function Header(){
    return(
        <header>
            <Link to="/">
                <img src={Logo} alt= "Logo KASA"/> 
            </Link>
            <nav>
                <Link className="linkNav" to="/">Accueil</Link>
                <Link className="linkNav" to="/about">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header;