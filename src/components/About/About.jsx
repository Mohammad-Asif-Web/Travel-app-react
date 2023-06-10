import React from 'react'
import "./AboutStyle.css"
import Navbar from '../Navbar';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';

 function About() {
  return (
    <div>
      <Navbar />
      <Hero 
          cName="hero-about"
          heroImg="https://images.unsplash.com/photo-1516832119974-8c3613657649?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          title="About"
          url="/"
        />
        <div className='about'>
          <div className="item">
            <h2>Our History</h2>
            <p>Trippy is owned and manged by Trippy.in Pvt Ltd. Aleading bound in web designing services and E-commerce solutions.Trippy is Counted for its expertise in web solutions and its top ranking business partals our invincible expertise and rich experience has raised our spirit to react ahead from our client's expectation. Commendable success rate of other partals managed by Trippy is a live paradigm of our work excellence.</p>
          </div>
          <div className="item">
            <h2>Our Mission</h2>
            <p>Our mission is to touch the horizon where our capabilities may successfrully meet with the requirements of our clients, that too with ultimate tranparency and cost-effectiveness.</p>
          </div>
          <div className="item">
            <h2>Our Vision</h2>
            <p>To sow the seeds of par-excellence services with customer centric aproach and reap the trust of worldwide clients..</p>
          </div>
        </div>
      <Footer />
    </div>
  )
}
export default About;