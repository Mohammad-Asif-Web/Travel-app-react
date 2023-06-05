import react from 'react'
import './NavbarStyle.css'
import { Link } from 'react-router-dom'



 function Navbar() {
  return (
    <nav>
        <h1>Trippy</h1>
        <ul>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/about"> About </Link>
            </li>
            <li>
                <Link to="/service"> Service </Link>
            </li>
            <li>
                <Link to="/contact"> Contact </Link>
            </li>
        </ul>
    </nav>
  )
}
export default Navbar