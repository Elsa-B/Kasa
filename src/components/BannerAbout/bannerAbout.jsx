import ImgAbout from "../../assets/banner_about.png"
import BannerCss from "../Banner/banner.module.css"

function BannerAbout(){
    return(
        <div className={BannerCss.bannerdiv}>
            <img src={ImgAbout} alt= "Vue sur un paysage" className={BannerCss.bannerimg}/>
        </div>
    )
}

export default BannerAbout;