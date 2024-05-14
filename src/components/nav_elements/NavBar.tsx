import './nav-bars.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
// import Logo from '../../components/backyard/logo/Logo'

export default function NavBar() {
  return (
    <nav id="nav-bar">
      {/* These links will either be links to pages OR links to page locations */}
      {/* <Logo height={60} /> */}
      <a href="#welcome-title" className="nav-item">Home</a>
      <a href="#about-me-field" className="nav-item">About Me</a>
      <a href="#project-field" className="nav-item">Projects</a>
      <a href="#skills-field" className="nav-item">Tech Skills</a>
      <a href="#contact-me-field" className="nav-item">Contact Me</a>
      <button className='menu-icon-btn' style={{opacity: '0%'}}>
        <FontAwesomeIcon icon={solid('bars')} className="menu-icon" onClick={() => null}/>
      </button>

      {/* <a href="#">Resume</a> */}
    </nav>
  )
}