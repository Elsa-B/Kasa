function Banner({img, imgMobile=null, text}){
    return(
        <section className="bannersection">
            <picture className="bannerdivPicture">
                {imgMobile && <source srcSet={imgMobile} media="(max-width: 428px)"/>}
                <img src={img} alt="Vue sur un paysage" className="bannerimg"/>
            </picture>
            <h1 className="bannerh1">{text}</h1>
        </section>
    )
}

export default Banner;