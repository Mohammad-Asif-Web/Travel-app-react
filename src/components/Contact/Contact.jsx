import React from 'react'
import "./ContactStyle.css"
import Navbar from '../Navbar';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';

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
        <div className="contact-form">
          <h2>Send a message to us!</h2>
          <form>
            <input type="text" placeholder='name' />
            <input type="text" placeholder='email' />
            <input type="text" placeholder='subject' />
            <textarea placeholder='message' rows="4"></textarea>
            <button>Send Message</button>
          </form>
        </div>
        {/* <Footer /> */}
    </div>
  )
}
export default Contact;