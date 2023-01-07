import CardCss from "../../components/Card/card.css"

function Card({title, cover }) {
    return (
        <div className={CardCss.blocCard}>
            <img src= {cover} alt= {title} className={CardCss.imgCard}/>
            <p className={CardCss.titleCard}>{title}</p>
        </div>
    )
}

export default Card