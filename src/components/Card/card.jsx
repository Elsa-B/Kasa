function Card({title, cover }) {
    return (
        <div className="blocCard">
            <img src= {cover} alt= {title} className="imgCard"/>
            <p className="titleCard">{title}</p>
        </div>
    )
}

export default Card