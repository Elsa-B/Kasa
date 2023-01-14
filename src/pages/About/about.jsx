import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Collapse from "../../components/Collapse/collapse"
import Banner from "../../components/Banner/banner";
import AboutJson from "../../data/about.json"
import ImgAbout from "../../assets/banner_about.png"

function About(){
    return(
        <>
            <Header/>
            <main>
                <Banner picture={ImgAbout} />
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