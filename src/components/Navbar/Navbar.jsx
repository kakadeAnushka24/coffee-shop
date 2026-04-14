import React from 'react'
import { House,FileUser,PhoneCall } from 'lucide-react';
import "./Navbar.css"
import { Link } from "react-router"



function Navbar({ active }) {
  return (
    <div>
      <nav className='navbar'>
       <Link to="/" className={`menu-items ${active == "home" ? "active-menu" : ""}`}> <House className='menu-icon'/>Home</Link> 
       <Link to="/about" className= {`menu-items ${active == "about" ? "active-menu" : ""}`}> <FileUser className='menu-icon'/>About</Link> 
       <Link to="/contact" className= {`menu-items ${active == "contact" ? "active-menu" : ""}`}> <PhoneCall className='menu-icon'/>Contact</Link> 
      
      </nav>
      
    </div>
  );
}
export default Navbar;