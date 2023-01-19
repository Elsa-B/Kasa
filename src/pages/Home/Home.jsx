import Banner from "../../components/Banner/banner"
import Card from "../../components/Card/card"
import { Link } from "react-router-dom"
import Data from "../../data/data.json"
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import imgBanner from '../../assets/banner.png';

function Home() {
  return (
	<>
		<Header/>
		<main>
			<Banner img={imgBanner} text={"Chez vous, partout et ailleurs"}/>
				<section className="backCard">
					{Data.map((accomodation,id) => (
						<div key={id} className="blocCard">
							<Link to={`/accomodation/${accomodation.id}`} >
								<Card cover={accomodation.cover} title={accomodation.title}/>
							</Link>
						</div>
					))}
				</section>
		</main>	
		<Footer/>
	</>
  )
}

export default Home