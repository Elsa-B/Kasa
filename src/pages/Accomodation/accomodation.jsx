import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Carrousel from "../../components/Carrousel/carrousel"
import Collapse from "../../components/Collapse/collapse"
import Data from "../../data/data.json"
import { useParams } from "react-router-dom";
import Error from "../../pages/Error/error";
import Rating from "../../components/Rating/rating"

function Accomodation(){
    const {id}= useParams();
    const idLocation = Data.find((accomodation) => {
        return accomodation.id === id;
      });

    if(idLocation===undefined){
        return(
            <Error/>
        )
    }

    return(
        <>
        <Header/>
        <main>
        <Carrousel pictures={idLocation.pictures}/>
        <section className="accomodationDescription">
            <div className="accomodationTitle">
                <h1 className="accomodationh1">{idLocation.title}</h1>
                <h2 className="accomodationh2">{idLocation.location}</h2>
                <div className="accomodationTags">{idLocation.tags.map((tag,id)=>
                <p key={id} className="accomodationTag">
                    {tag}
                </p>)}</div>
            </div>
            <div className="mobileAccomodation">
                <div className="accomodationCharacter">
                    <p className="accomodationNameCharacter">{idLocation.host.name}</p>
                    <img src={idLocation.host.picture} alt="Portrait d'un collaborateur" className="accomodationPicture"/>
                </div>
                <Rating rate={idLocation.rating}/>
            </div>
        </section>
        <section className="accomodationCollapse">
                <Collapse title="Description" text={idLocation.description} key={id}/>     
                <Collapse title="Equipement" text={idLocation.equipments.map((equipment,id)=>
                    <li key={id} className="accomodationEquipment">{equipment}</li>
                    )}  />
            </section>       
        </main>
        <Footer/>
        </>
    )
}
export default Accomodation