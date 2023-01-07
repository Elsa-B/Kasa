import imgBanner from '../../assets/banner.png'
import BannerCss from '../Banner/banner.css'

function Banner(){
    return(
        <div className={BannerCss.bannerdiv}>
            <img src={imgBanner} alt= "Vue sur un paysage" className={BannerCss.bannerimg}/>
            <p className={BannerCss.bannerp}>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner;