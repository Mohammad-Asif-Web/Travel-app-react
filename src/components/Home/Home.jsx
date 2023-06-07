import React from 'react'
import Navbar from '../Navbar';
import "./HomeStyle.css"
import Hero from '../Hero/Hero';
import Destination from '../Destination/Destination';


 function Home() {
  return (
    <>
        <Navbar />
        <Hero 
          cName="hero"
          heroImg="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80"
          title="Your Journey Your Story"
          text="Choose Your Favourite Destination From Here"
          buttonText="Travel Plan"
          url="/"
          btnClass="show"
        />

        <Destination />

        


    </>
  )
}
export default Home;