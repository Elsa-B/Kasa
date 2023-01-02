import { Routes, Route } from "react-router-dom";
import Error from './pages/Error/error';
import Accomodation from './pages/Accomodation/accomodation';
import About from './pages/About/about';
import Home from './pages/Home/home'
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path= "/accomodation/:id" element= {<Accomodation/>}/>
        <Route path="/about" element={ <About/> } />
        <Route path="*" element={ <Error/> } />
      </Routes> 
      <Footer/>
    </div>
  )
}

export default App