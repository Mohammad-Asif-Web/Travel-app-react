import React from 'react'
import "./AboutStyle.css"
import Navbar from '../Navbar';
import Hero from '../Hero/Hero';

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
    </div>
  )
}
export default About;