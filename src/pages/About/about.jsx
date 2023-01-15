import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Collapse from "../../components/Collapse/collapse"
import BannerAbout from "../../components/BannerAbout/bannerAbout";
import AboutJson from "../../data/about.json"

function About(){
    return(
        <>
            <Header/>
            <main>
                <BannerAbout/>
                <section className="section">
                    {AboutJson.map((about,id) => (
                            <Collapse title={about.title} text={about.text} key={id}/>
                        ))}
                </section>
            </main>
            <Footer/>
        </>
    )
}
export default About