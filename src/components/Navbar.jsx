import react, { useState } from 'react'
// import { Component } from 'react'
import './NavbarStyle.css'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

 function Navbar () {
    // setting hamburger/close icon
    const [icon, setIcon] = useState({
        clicked : false
    });
    //  let state = { clicked: false};
     const handleClick = () =>{
        if(icon.clicked === false){
            setIcon({
                clicked : true
            })
        }
        if(icon.clicked === true){
            setIcon({
                clicked : false
            })
        }
     }

    return (
        <nav className='NavbarItems'>

            {/* Logo */}
            <div className='navbar-logo'>
                <Link to="/" >Trippy</Link>
            </div>
            
            {/* Side Menu Icons */}
            <div className='menu-icons' onClick={handleClick}>
                {icon.clicked ? <FaTimes /> : <FaBars />}
            </div>

            {/* Main Menu */}
            <ul className='nav-menu'>
                {MenuItems.map((item, idx) =>{
                    return(
                        <li key={idx}>
                            <Link className={item.cName} to={item.url}>
                                {item.icon} {item.title}
                            </Link>
                        </li>
                    )
                })}
                <button>
                    <Link to="/signup">Sign Up</Link>
                </button>
            </ul>
        </nav>
    )
}
export default Navbar;