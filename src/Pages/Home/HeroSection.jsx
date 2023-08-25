import React from "react";

export default function HeroSection() {

    return (

      <section id="heroSection" className="hero--section">

        <div className="hero--section--content--box">

          <div className="hero--section--content">
            <p className="section--title"> Hey, we are Advertising agency </p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Grow your <span style={{color:"#644288"}}>Business</span> </span>{" "}
              <br />
              {/* <h2 style={{fontSize:"2.5rem", marginLeft:"3rem"}}>Developer</h2> */}
              with us
            </h1>
            

            <p className="hero--section-description">
            “ Good marketing makes the company look smart.
              <br />
              Great marketing makes the customer feel smart ”
            
              
            </p>
              
            
          </div>

          <button className="btn btn-primary"><a style={{textDecoration:"none", color:"white", }} href="https://wa.me/6265856938">Get In Touch</a></button>
        </div>

        <div className="hero--section--img">
          <img src="https://idecution.marketing/assets/images/Idecution-Digital-Marketing-Agency-Services.png" alt="Hero Section" />
        </div>

      </section>

    );
  }