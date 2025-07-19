import logo from "../assets/CesarRamirezLogo.png"
import {FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className="mx-2 w-30" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-between gap-6 text-2xl">
        <a href="https://www.linkedin.com/in/cesar-ramirez-8047b974/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-cyan-400 transition-colors duration-200" />
        </a>
        <a href="https://github.com/cesar91bo" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-cyan-400 transition-colors duration-200" />
        </a>
        <a href="https://wa.me/5493725403098" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="hover:text-cyan-400 transition-colors duration-200" />
        </a>
        <a href="https://www.instagram.com/cesar91bo/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-cyan-400 transition-colors duration-200" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar