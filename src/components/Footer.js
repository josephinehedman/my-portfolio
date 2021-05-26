import React from "react"
import '../styles/footer.css'
import linkedin from '../../public/linkedin.png'
import github from '../../public/github.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <h2 className="footer__heading"> Connect with me </h2>
            <div className="footer__logos">
              <img src={linkedin} alt='linkedin logo' className='connect-logo'/>
              <img src={github} alt='github logo' className='connect-logo'/>
            </div>
        </footer>
    )
}

export default Footer;