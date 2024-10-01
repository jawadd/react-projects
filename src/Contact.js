import React from 'react'
import { Link ,NavLink, Outlet} from "react-router-dom";


const Contact = () => {
  return (
    <div>
         <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
        <div>
        <NavLink to="youtube">Youtube</NavLink>
        <NavLink to="twitter">Twitter</NavLink>
        <NavLink to="github">Github</NavLink>
        </div>
        <Outlet/>
      <h1> Contact Us page </h1>
    </div>
  )
}

export default Contact
