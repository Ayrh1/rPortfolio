//Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from '../components/UI/Navbar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key="welcome" className="nav-link text-light" to="/">
        Welcome
        </Link>,
        <Link key="home" className="nav-link text-light" to="/home">
        Home
        </Link>,
        <Link key="aboutMe" className="nav-link text-light" to="/aboutMe">
        About Me
        </Link>,
        <Link key="portfolio" className="nav-link text-light" to="/portfolio">
        Portfolio
        </Link>,
        <Link key="contact" className="nav-link text-light" to="/contact">
        Contact
        </Link>,
         <Link key="login" className="nav-link text-light" to="/login">
         Login
         </Link>,
      ]}
    />
  );
}