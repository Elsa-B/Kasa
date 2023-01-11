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
        <section>
			<img src={ArrowLeft} alt="Flèche vers la gauche" onClick={goToPrevious}/>
            {pictures.map((picture,pictureIndex) => (
				<div key={pictureIndex}>
                    {pictureIndex === navigation && 
                    <img src={picture} alt="Vue du logement"/>}
                    {pictureIndex === navigation &&
                    <span>{navigation +1} / {pictures.length}</span>}
                </div>
			))}
            <img src={ArrowRight} alt="Flèche vers la droite" onClick={goToNext}/>
		</section>
    )
}

export default Carrousel;