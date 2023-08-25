import React from "react";
import MyPortfolio from "./Home/MyPortfolio"; 


export default function AboutMe() {


    return (

      <section id="AboutMe" className="about--section">

        <div className="about--section--img">
          <img src="https://www.cyberhelpindia.com/images/hero/digital-marketing.svg" alt="About Me" />
        </div>

        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">

            <p className="section--title">Know more</p>

            <h1 className="skills-section--heading" style={{color:"#ffff"}}>About Us</h1>

            <p className="hero--section-description">
            It's not about us, it's about <span style={{fontWeight:"bold", color:"blueviolet"}}>your business</span>  and how we can help you <span style={{fontWeight:"bold", color:"blueviolet"}}>grow</span> it.
            </p>
        
            <p className="hero--section-description">
            Going beyond advertisements and connecting consumers directly with premium
             services is what sets this company apart from others in full-service advertising markets.
            </p>

            <p className="hero--section-description">
            Our Digital Marketing Service for different associations across the globe. 
            Our organization drives organizations strategic vital innovation center and 
            get project efficiencies to various Digital Marketing Services. At Agreem Technologies, 
            we offer with distributed Digital Excellence.
            </p>

          </div>
        </div>
      </section>

    );
  }