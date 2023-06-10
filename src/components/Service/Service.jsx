import React from 'react'
import "./ServiceStyle.css"
import Navbar from '../Navbar';
import Hero from '../Hero/Hero';
import Trip from '../Trip/Trip';
import Footer from '../Footer/Footer';

 function Service() {
  return (
    <div>
        <Navbar />
        <Hero 
          cName="hero-service"
          heroImg="https://images.unsplash.com/photo-1469796466635-455ede028aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          title="Service"
          url="/"
        />
        <Trip />
        <Footer />
    </div>
  )
}
export default Service;