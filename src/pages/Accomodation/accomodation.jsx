import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Carrousel from "../../components/Carrousel/carrousel"
import Collapse from "../../components/Collapse/collapse"
import Data from "../../data/data.json"
import { useParams } from "react-router-dom";
import Error from "../../pages/Error/error";
import Star from "../../components/Rating/rating"

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
        <section>
            <div>
                <h1>{idLocation.title}</h1>
                <h2>{idLocation.location}</h2>
                <div>{idLocation.tags.map((tag,id)=>
                <p key={id}>
                    {tag}
                </p>)}</div>
            </div>
            <div>
                <div>
                    <p>{idLocation.host.name}</p>
                    <img src={idLocation.host.picture} alt="Portrait d'un collaborateur"/>
                </div>
                <Star rate={idLocation.rating}/>
            </div>
        </section>
        <section>
            <Collapse title="Description" text={idLocation.description} key={id}/>        
            <Collapse title="Equipement" text={idLocation.equipments.map((equipment,id)=>
                <ul>
                    <li key={id}>{equipment}</li>
                </ul>)}  />
        </section>
        </main>
        <Footer/>
        </>
    )
}
export default Accomodation