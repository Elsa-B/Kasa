import { Routes, Route } from "react-router-dom";
import Error from './pages/Error/error';
import Accomodation from './pages/Accomodation/accomodation';
import About from './pages/About/about';
import Home from './pages/Home/home';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path= "/accomodation/:id" element= {<Accomodation/>}/>
        <Route path="/about" element={ <About/> } />
        <Route path="*" element={ <Error/> } />
      </Routes> 
    </div>
  )
}

export default App