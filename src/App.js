import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import instagram from "./images/instagram.png";
import linkdin from "./images/linkdin.png";
import "./App.css";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Careers from "./components/Careers/Careers";
import { ParallaxProvider } from "react-scroll-parallax";
import Contact from "./components/ContactUs/contact";
import Form from './components/Careers/email';
import Service from "./components/Services/Service";
// import DayNightToggle from 'react-day-and-night-toggle'
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [body, setBody] = useState('white');
  useEffect(() => {
    
    if(isDarkMode){
      setBody('black')
    }
    else{
      setBody('white')
    }
  }, [isDarkMode])
  
  document.body.style.backgroundColor= body
  return (
    <ParallaxProvider>
      <div className="App">
        <Router>
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
          
          <div>
            <ul className="social">
              {/* <li><a href=""><img src={facebook} alt="" /></a></li> */}
              <li>
                <a href="https://www.instagram.com/blitzpath.innovations/?utm_medium=copy_link">
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/blitzpath-innovations/">
                  <img src={linkdin} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <Routes>
            <Route exact path="/Blitzpath" element= {<Home isDarkMode={isDarkMode}/>} />
            <Route  path="/about" element= {<About isDarkMode={isDarkMode}/>} />
            <Route  path="/services" element= {<Service isDarkMode={isDarkMode}/>} />
            <Route path ="/Careers" element = {<Careers isDarkMode={isDarkMode}/>}/>
            <Route path = "/ContactUs" element = {<Contact isDarkMode={isDarkMode}/>}/>
            <Route path = "/apply" element = {<Form isDarkMode={isDarkMode}/>}/>
          </Routes>
          <Footer />
        </Router>
      </div>
    </ParallaxProvider>
  );
}

export default App;
