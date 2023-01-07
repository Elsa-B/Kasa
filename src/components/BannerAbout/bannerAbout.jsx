import ImgAbout from "../../assets/banner_about.png"
import BannerAboutCss from "../BannerAbout/bannerAbout.module.css"

function BannerAbout(){
    return(
        <div className={BannerAboutCss.divbannerabout}>
            <img src={ImgAbout} alt= "Vue sur un paysage" className={BannerAboutCss.imgbannerabout}/>
        </div>
    )
}

export default BannerAbout;