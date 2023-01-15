import ImgAbout from "../../assets/banner_about.png"
import ImgAboutMobile from "../../assets/banner_about_mobile.png"

function BannerAbout(){
    return(
        <section>
            <picture className="bannerAboutdiv">
                <source srcSet={ImgAboutMobile} media="(max-width: 810px)"/>
                <img src={ImgAbout} alt="Vue sur un paysage" className="bannerAboutimg"/>
            </picture>
        </section>
    )
}

export default BannerAbout;