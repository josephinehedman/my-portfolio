import { Link } from 'gatsby'
import React, { useState } from 'react'
import '../styles/navbar.css'

export default function Navbar() {
    const [displayLinks, setDisplayLinks] = useState('hide');
    const [toggleBtn, setToggleBtn] = useState('');

    const toggleMenu = (e) => {
        let updateDisplayLinks;
        let updateToggleBtn;
        if (displayLinks === 'hide') {
            updateDisplayLinks = '';
            updateToggleBtn = 'open'
        } else {
            updateDisplayLinks = 'hide';
            updateToggleBtn = ''
        }
        setDisplayLinks(updateDisplayLinks);
        setToggleBtn(updateToggleBtn);
    }

    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <div>
                    <p className="name__box"><b>JOSEPHINE <br/> HEDMAN</b></p>
                </div>
                <button onClick={toggleMenu} className='toggle-btn'>
                    <div className={`toggle-div ${toggleBtn}`}>
                        <span>
                        </span>  
                        <span>
                        </span>
                    </div>
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


