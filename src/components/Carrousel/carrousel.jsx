import ArrowLeft from "../../assets/arrow_left.png"
import ArrowRight from "../../assets/arrow_right.png"
import Data from "../../data/data.json"

function Carrousel(){
    return(
        <section>
			<img src={ArrowLeft} alt="Flèche vers la gauche"/>
            {Data.map((picture,id) => (
				<img key={id} src={picture} alt="Photos du logement"/>
			))}
            <img src={ArrowRight} alt="Flèche vers la droite"/>
		</section>)
    
}

export default Carrousel;