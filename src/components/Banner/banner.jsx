
function Banner({img, imgMobile=null, text}){
    return(
        <section className="bannersection">
            <picture className="bannerdivPicture">
                {imgMobile && <source srcSet={imgMobile} media="(max-width: 810px)"/>}
                <img src={img} alt="Vue sur un paysage" className="bannerimg"/>
            </picture>
            <h1 className="bannerh1">{text}</h1>
        </section>
    )
}

/*export default BannerAbout;
function Banner(){
    return(
        <section className="bannerdiv">
            <img src={imgBanner} alt= "Vue sur un paysage" className="bannerimg"/>
            <h1 className="bannerh1">Chez vous, partout et ailleurs</h1>
        </section>
    )
}*/

export default Banner;