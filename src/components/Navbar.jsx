import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-between gap-6 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaWhatsapp />
        <FaInstagram />
      </div>
    </nav>
  )
}

export default Navbar