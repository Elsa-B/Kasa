import { useState } from "react";
import ArrowDown from "../../assets/arrow_down.png"
import CollapseCss from "../Collapse/collapse.module.css"

function Collapse({title, text}){
    const[open, close]=useState(false);

    return(
        <div className={CollapseCss.space}>
            <div onClick={()=>close(!open)} className={CollapseCss.dropdown}>
                <h2 className={CollapseCss.titlecollapse}>{title}</h2>
                <img src={ArrowDown} alt="flèche" className={CollapseCss.arrow}/>
            </div>
            <div className={CollapseCss.backtext}>
                <p>{text}</p>
            </div>
        </div>
    )
}


export default Collapse;