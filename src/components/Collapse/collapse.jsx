import { useState } from "react";
import ArrowUp from "../../assets/arrow_up.png"
import CollapseCss from "../Collapse/collapse.module.css"

function Collapse({title, text}){
    const[open, close]=useState(false);
    const toggle= () => {
        console.log(open);
		close(!open);
	};

    return(
        <div className={CollapseCss.space}>
            <div onClick={toggle} className={CollapseCss.dropdown}>
                <h2 className={CollapseCss.titlecollapse}>{title}</h2>
                <img src={ArrowUp} alt="flèche" className={CollapseCss.arrow}/>
            </div>
            <div className={CollapseCss.backtext}>
                <p>{text}</p>
            </div>
        </div>
    )
}


export default Collapse;