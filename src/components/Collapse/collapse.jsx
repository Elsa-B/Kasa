import { useState } from "react";
import ArrowUp from "../../assets/arrow_up.png"
import ArrowDown from "../../assets/arrow_down.png"

function Collapse({title, text}){
    const[open, close]=useState(false);
    const toggle= () => {
        console.log(open);
		close(!open);
	};

    return(
        <div className="space">
            <div onClick={toggle} className="dropdown">
                <h2 className="titlecollapse">{title}</h2>
                {open ? (
                    <img src={ArrowUp} alt="flèche" className="arrow"/>)
                    :(<img src={ArrowDown} alt="flèche" className="arrow"/>
                )}
            </div>
            {open && (
                <div className="backtext">
                    <p>{text}</p>
                </div>
            )}
        </div>
    )
}


export default Collapse;