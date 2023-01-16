import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Collapse from "../../components/Collapse/collapse"
import Banner from "../../components/Banner/Banner";
import AboutJson from "../../data/about.json"
import ImgAbout from "../../assets/banner_about.png"
import ImgAboutMobile from "../../assets/banner_about_mobile.png"


function About(){
    return(
        <>
            <Header/>
            <main>
                <Banner img={ImgAbout} imgMobile={ImgAboutMobile}/>
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