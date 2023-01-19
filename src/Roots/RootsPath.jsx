import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import Error from '../pages/Error/error';
import Accomodation from '../pages/Accomodation/accomodation';
import About from '../pages/About/about';
import Home from '../pages/Home/Home';

function Root(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path= "/accomodation/:id" element= {<Accomodation/>}/>
                <Route path="/about" element={ <About/> } />
                <Route path="*" element={ <Error/> } />
            </Routes>
        </Router>
    )
}

export default Root