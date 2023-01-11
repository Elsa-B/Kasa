import { Link } from "react-router-dom";
import LogoWhite from '../../assets/logowhite.png';

function Footer(){
    return(
        <footer>
            <div>
                <Link to="/">
                <img src={LogoWhite} alt= "Logo KASA"/> 
                </Link>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>    
        </footer>
    )
}

export default Footer;