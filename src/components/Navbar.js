import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import '../styles/navbar.css'

export default function Navbar() {
    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
            siteMetadata {
                title
            }
        }
    }      
    `)

    const { title } = data.site.siteMetadata;

    return (
        <nav className="navbar">
            <h1>{title}</h1>
            <ul className="navbar__list">
                <li className="navbar__list-item">
                    <Link to="/" className="links">Home</Link>
                </li>
                <li className="navbar__list-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="navbar__list-item">
                    <Link to="/portfolio">Portfolio</Link>  
                </li>
            </ul>
        </nav>
    )
}


