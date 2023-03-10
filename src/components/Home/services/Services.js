import React,{useEffect} from 'react'
import "./Services.css"
import Sourcing from '../../../images/Sourcing.jpeg'
import Consulting from '../../../images/Consulting.jpg'
import Technology from '../../../images/Technology.jpg'
import Analytics from '../../../images/Analytics.jpg'
import { AnimationOnScroll } from "react-animation-on-scroll";
function Services({color}) {
  useEffect(() => {
    document.getElementById('service').style.color = color
  }, [color])
  
    const item = [{
        id : 1,
        src : Consulting,
        alt : 'Consulting',
        content: 'World is changing everyday and the technology is changing faster than that. ',
        heading: 'Consulting'
    },
    {
        id : 2,
        src : Technology,
        alt : 'Technology',
        content: 'Blitzpath has delighted clients in execution of Technology Programs',
        heading: 'Technology'
    },
    {
        id : 3,
        src : Analytics,
        alt : 'Analytics',
        content: 'Leading  industry giants in Technology ',
        heading: 'Analytics'
    },
    {
        id : 4,
        src : Sourcing,
        alt : 'Sourcing',
        content: 'Evolving business models in the industry are fueled further by Information Technology Enabled Services. ',
        heading: 'Sourcing'
    }]
    // <div class="image-container">
    //       <img src="Technology.jpg" alt="Image 2"/>
    //       <div class="image-content">
    //         <h3></h3>
    //         <p>
             
    //         </p>
    //       </div>
    //     </div>
    //     <div class="image-container">
    //       <img src="Analytics.jpg" alt="Image 3"/>
    //       <div class="image-content">
    //         <h3></h3>
    //         <p> </p>
    //       </div>
    //     </div>
    //     <div class="image-container">
    //       <img src="image4.jpeg" alt="Image 4"/>
    //       <div class="image-content">
    //         <h3></h3>
    //         <p></p>
    //       </div>
    //     </div>
  return (
    <section className='serviceContainer' id='service'>
        <div className='Heading'>
        <AnimationOnScroll    
              animateOnce={false}
              offset={-200}
              animateIn="animate__fadeInUp"
              // duration={0.8}
              >
            <h1>Our Services</h1>
            </AnimationOnScroll>
        </div>
        <section className='services'>
          <section class="image-section">
            
              <div class="image-container row">
                <img src={item[1].src} alt={item[1].alt}/>
                <div class="image-content">
                  <h3>{item[1].heading}</h3>
                  <p>{item[1].content} </p>
                </div>
              </div>
              <div class="image-container mobile-grid">
                <img src={item[0].src} alt={item[0].alt}/>
                <div class="image-content ">
                  <h3>{item[0].heading}</h3>
                  <p>{item[0].content} </p>
                </div>
              </div>
              <div class="image-container row1">
                <img src={item[2].src} alt={item[2].alt}/>
                <div class="image-content">
                  <h3>{item[2].heading}</h3>
                  <p>{item[2].content} </p>
                </div>
              </div>
              <div class="image-container mobile-grid">
                <img src={item[3].src} alt={item[3].alt}/>
                <div class="image-content">
                  <h3>{item[3].heading}</h3>
                  <p>{item[3].content} </p>
                </div>
              </div>
          </section>
        </section>
     </section>
  )
}

export default Services