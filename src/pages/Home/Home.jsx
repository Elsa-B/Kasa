import Banner from "../../components/Banner/banner"
import Card from "../../components/Card/card"
import { Link } from "react-router-dom"
import Data from "../../data/data.json"

function Home() {
  return (
    <main>
      <Banner/>
      <div>
				{Data.map((accomodation,id) => (
					<div key={id}>
						<Link to={`/accomodation/${accomodation.id}`}>
							<Card cover={accomodation.cover} title={accomodation.title} />
						</Link>
					</div>
				))}
			</div>
    </main>  
  )
}

export default Home