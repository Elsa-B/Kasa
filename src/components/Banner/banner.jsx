import imgBanner from '../../assets/banner.png'

function Banner(){
    return(
        <section className="bannerdiv">
            <img src={imgBanner} alt= "Vue sur un paysage" className="bannerimg"/>
            <h1 className="bannerh1">Chez vous, partout et ailleurs</h1>
        </section>
    )
}

export default Banner;