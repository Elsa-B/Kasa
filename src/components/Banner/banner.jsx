import imgBanner from '../../assets/banner.png'

function Banner(){
    return(
        <div className="bannerdiv">
            <img src={imgBanner} alt= "Vue sur un paysage" className="bannerimg"/>
            <p className="bannerp">Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner;