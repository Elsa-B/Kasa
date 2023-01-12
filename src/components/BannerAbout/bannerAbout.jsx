import ImgAbout from "../../assets/banner_about.png"

function BannerAbout(){
    return(
        <section className="sectionbannerabout">
            <img src={ImgAbout} alt= "Vue sur un paysage" className="imgbannerabout"/>
        </section>
    )
}

export default BannerAbout;