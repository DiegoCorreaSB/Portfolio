import '../../index.css'
import './navbar.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const NavBar = () => {
    return (
        <section className="navbar-container">
            <div className='navbar-name'>
                <p>CORREA DEV</p>
            </div>
            <div className='navbar-links'>
                <a href="">Home</a>
                <a href="#">Projetos</a>
                <a href="#">Certificações</a>
                <a href="#">Contato</a>
            </div>
            <div className='navbar-icons'>
                <a href="https://www.instagram.com/dgcorrea__/" target='_blank'><FaInstagram /></a>
                <a href="#"><FaLinkedin /></a> { /* colocar link linkedin */ }
                <a href="https://github.com/DiegoCorreaSB" target='_blank'><FaGithub  /></a>
            </div>
        </section>
    )
}

export default NavBar