import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './navbar.css';

const Navbar = () => {
  return (
    <header>
        <nav className="nav-container">
                <h2 className="logo">Seker</h2>
            <section className="links-container">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/">About</Link>
                <Link className="link" to="/">Services</Link>
                <Link className="link" to="/">Contact</Link>
            </section>
            <section className="icons-container">
            <FontAwesomeIcon 
            icon={faGithub} 
            className="icon"
            size="2x"
            onClick={() => window.open('https://github.com/Carmelo85S', '_blank')} 
            />
            <FontAwesomeIcon 
            icon={faTwitter}
            className="icon"
            size="2x"
            />
            <FontAwesomeIcon 
            icon={faInstagram}
            className="icon" 
            size="2x" 
            onClick={() => window.open('https://www.instagram.com/sundsgarden_it/', '_blank')} 
            />
            </section>
        </nav>
    </header>
  )
}

export default Navbar
