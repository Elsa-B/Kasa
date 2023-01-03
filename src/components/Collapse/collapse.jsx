import { useState } from "react";
import ArrowDown from "../../assets/arrow_down.png"


function Collapse({title, text}){
    const[open, close]=useState(false);

    return(
        <div>
            <div onClick={()=>close(!open)}>
                <h2>{title}</h2>
                <img src={ArrowDown} alt="flèche"/>
            </div>
            <div>
                <p>{text}</p>
            </div>
        </div>
    )
}


export default Collapse;