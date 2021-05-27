import React from "react"
import '../styles/footer.css'
import linkedin from '../images/linkedin.png'
import github from '../images/github.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <h2 className="footer__heading"> Connect with me </h2>
            <div className="footer__logos">
              <a href="https://www.linkedin.com/in/josephine-hedman/" target="_blank" className><img src={linkedin} alt='linkedin logo' className='connect-logo'/></a>
              <a href="https://github.com/josephinehedman"target="_blank"><img src={github} alt='github logo' className='connect-logo'/></a>
            </div>
        </footer>
    )
}

export default Footer;