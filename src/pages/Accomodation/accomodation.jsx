import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Carrousel from "../../components/Carrousel/carrousel"
import Product from "../../components/ProductInfo/productInfo";
import Collapse from "../../components/Collapse/collapse"
import Data from "../../data/data.json"
import { useParams } from "react-router-dom";
import Error from "../../pages/Error/error";

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
        <Product/>
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