import { Link } from "react-router-dom";
import LogoWhite from '../../assets/logowhite.png';
import FooterCss from '../Footer/footer.module.css'

function Footer(){
    return(
        <footer className={FooterCss.footer}>
            <div className={FooterCss.div}>
                <Link to="/">
                <img src={LogoWhite} alt= "Logo KASA" className={FooterCss.img}/> 
                </Link>
                <p className={FooterCss.p}>© 2020 Kasa. All rights reserved</p>
            </div>    
        </footer>
    )
}

export default Footer;