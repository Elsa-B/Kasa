import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';

function Footer(){
    return(
        <footer>
            <div>
                <Link to="/">
                  <img src={Logo} alt= "Logo KASA"/> 
                </Link>
            </div>
            <div>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;