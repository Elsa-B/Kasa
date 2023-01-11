import Banner from "../../components/Banner/banner"
import Card from "../../components/Card/card"
import { Link } from "react-router-dom"
import Data from "../../data/data.json"
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

function Home() {
  return (
	<>
		<Header/>
		<main>
			<Banner/>
				<div className="backCard">
					{Data.map((accomodation,id) => (
						<div key={id} >
							<Link to={`/accomodation/${accomodation.id}`}>
								<Card cover={accomodation.cover} title={accomodation.title} />
							</Link>
						</div>
					))}
				</div>
		</main>	
		<Footer/>
	</>
  )
}

export default Home