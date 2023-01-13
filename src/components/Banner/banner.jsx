function Banner({picture, text}){
    return(
        <section className="bannerdiv">
            <img src={picture} alt= "Vue sur un paysage" className="bannerimg"/>
            <h1 className="bannerh1">{text}</h1>
        </section>
    )
}

export default Banner;