import React from 'react'
import "./FooterStyle.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <section className='footer'>
        <div className="top">
            <div>
                <h1>Trippy</h1>
                <p>Choose Your Favourite Destination</p>
            </div>
            <div className='flex'>
                <FaFacebookSquare />
                <FaTwitterSquare />
                <FaInstagramSquare />
                <FaLinkedin />
            </div>
        </div>
        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="/">Github</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
                <a href="/">Twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshooting</a>
                <a href="/">Contact Us</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href="/">Terms of Service</a>
                <a href="/">Privacy</a>
                <a href="/">Policy</a>
                <a href="/">License</a>
            </div>
        </div>
    </section>
  )
}
export default Footer;