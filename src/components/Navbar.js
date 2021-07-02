import { Link } from 'gatsby'
import React, { useState } from 'react'
import '../styles/navbar.css'

export default function Navbar() {
    const [displayLinks, setDisplayLinks] = useState('hide');

    const toggleMenu = (e) => {
        let updateDisplayLinks;
        if (displayLinks === 'hide') {
            updateDisplayLinks = '';
        } else {
            updateDisplayLinks = 'hide';
        }
        setDisplayLinks(updateDisplayLinks);
    }

    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <div>
                    <p className="name__box"><b>JOSEPHINE <br/> HEDMAN</b></p>
                </div>
                <button onClick={toggleMenu}>
                    hej
                </button>
                <div className={`navbar__link-container ${displayLinks}`}>
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


