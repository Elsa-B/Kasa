import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';

function Header(){
    return(
        <header>
            <div>
                <Link to="/">
                  <img src={Logo} alt= "Logo KASA"/> 
                </Link>
            </div>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </header>
    )
}
export default Header;