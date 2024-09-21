import About from "./components/About";
import Home from "./components/Home";
import Events from "./components/Events";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from 'react-router-dom';
import Cover from "./components/Cover";
import AwardSlider from "./components/AwardSlider";
import Faq from "./components/Faq";
import Details from "./components/Details";
import Contactus from "./components/contactus";
import Footer from "./components/footer";
import Terms from "./components/T&C"; 
import RegForm from "./components/Forms/RegForm";




function App() {

  return (
  
    <Router>
      <NavBar />
      <Home />
      <About />
      <Events />
      <Cover />
      <Details />
      <AwardSlider />
      <Faq />
      <Contactus/>
      <Footer/>
      
    </Router>
 
  
  )
}

export default App
