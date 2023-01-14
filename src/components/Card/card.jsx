function Card({title, cover }) {
    return (
        <div className="cardAccomodation">
            <img src= {cover} alt= {title} className="imgCard"/>
            <h2 className="titleCard">{title}</h2>
        </div>
    )
}

export default Card