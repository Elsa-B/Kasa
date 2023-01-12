import RedStar from "../../assets/red_star.png"
import GreyStar from "../../assets/grey_star.png"

function Star({rate}){
    const numberOfStars = [1, 2, 3, 4, 5];

    return(
        <div  className="mobileStar">
            {numberOfStars.map((number, id)=>
            rate>=number ? (<img key={id} className="imgStar" src= {RedStar} alt="Etoile rouge"/> ) 
            : (<img key={id} className="imgStar" src= {GreyStar} alt="Etoile grise"/>  ))}
        </div>
    )
}

export default Star