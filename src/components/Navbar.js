import { Link } from 'gatsby'
import React from 'react'
import '../styles/navbar.css'

export default function Navbar() {

    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__list-item">
                    <Link to="/" className="navbar__links" activeClassName="active__link">Home</Link>
                </li>
                <li className="navbar__list-item">
                    <Link to="/about" className="navbar__links" activeClassName="active__link">About</Link>
                </li>
                <li className="navbar__list-item">
                    <Link to="/portfolio" className="navbar__links" activeClassName="active__link">Portfolio</Link>  
                </li>
            </ul>
        </nav>
    )
}


