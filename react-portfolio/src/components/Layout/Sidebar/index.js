import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../../assets/images/J.png'
import LogoSubtitle from '../../../assets/images/logo_subj.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser  } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='slobodan' />
        </Link>
        <nav>
            <NavLink exact="true" activeClassName='active' to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>    
            <NavLink exact="true" activeClassName='active' className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink> 
            <NavLink exact="true" activeClassName='active' className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink> 
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/joeypham9/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
                <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/Jpham21'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.youtube.com/@Joeypham21'>
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>
            </li>
        </ul>
    </div>
)

export default Sidebar