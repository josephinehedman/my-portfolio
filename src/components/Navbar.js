import { Link } from 'gatsby'
import React from 'react'
import '../styles/navbar.css'

export default function Navbar() {

    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <div>
                    <p className="name__box">JOSEPHINE <br/> HEDMAN</p>
                </div>
                <div className="navbar__link-container">
                    <li className="navbar__list-item">
                        <Link to="/" className="navbar__links" activeClassName="active__link">Home</Link>
                    </li>
                    <li className="navbar__list-item">
                        <Link to="/about" className="navbar__links" activeClassName="active__link">About</Link>
                    </li>
                    <li className="navbar__list-item">
                        <Link to="/portfolio" className="navbar__links" activeClassName="active__link">Portfolio</Link>  
                    </li>
                </div>
            </ul>
        </nav>
    )
}


