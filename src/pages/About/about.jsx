import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Collapse from "../../components/Collapse/collapse"
import BannerAbout from "../../components/BannerAbout/bannerAbout";
import AboutJson from "../../data/about.json"

function About(){
    return(
        <>
            <Header/>
            <BannerAbout/>
            <div className="div">
                {AboutJson.map((about,id) => (
                        <Collapse title={about.title} text={about.text} key={id} />
                    ))}
            </div>
            <Footer/>
        </>
    )
}
export default About