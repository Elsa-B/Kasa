import { useState } from "react";
import ArrowLeft from "../../assets/arrow_left.png"
import ArrowRight from "../../assets/arrow_right.png"

function Carrousel({pictures}){
    const [navigation, setNavigation]=useState(0);
    const goToPrevious = () =>{
        const firstSlide = navigation ===0;
        const newNavigation = firstSlide ? pictures.length -1 : navigation -1;
        setNavigation(newNavigation);
    }
    const goToNext = () =>{
        const lastSlide = navigation === pictures.length -1;
        const newNavigation = lastSlide ? 0 : navigation +1;
        setNavigation(newNavigation);
    }

    return(
        <section className="carrouselPosition">
            {pictures.length>1 && (
			<img src={ArrowLeft} alt="Flèche vers la gauche" onClick={goToPrevious} className="carrouselArrow arrowLeft"/>)}
				<div key={navigation} className="divImgCarrousel">
                    <img src={pictures[navigation]} alt="Vue du logement" className="carrouselImg"/>
                    {pictures.length>1 &&(
                    <span className="carrouselNumber">{navigation +1} / {pictures.length}</span>)}
                </div>
            {pictures.length>1 && (
            <img src={ArrowRight} alt="Flèche vers la droite" onClick={goToNext} className="carrouselArrow arrowRight"/>)} 
		</section>
    )
}

export default Carrousel;