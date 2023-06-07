import React from 'react'
import "./ContactStyle.css"
import Navbar from '../Navbar';
import Hero from '../Hero/Hero';

 function Contact() {
  return (
    <div>
        <Navbar />
        <Hero 
          cName="hero-contact"
          heroImg="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          title="Get In Touch"
          url="/"
        />
    </div>
  )
}
export default Contact;