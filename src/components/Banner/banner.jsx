import imgBanner from '../../assets/banner.png'

function Banner(){
    return(
        <div>
            <img src={imgBanner} alt= "Vue sur un paysage"/>
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner;