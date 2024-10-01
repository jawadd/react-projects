import React from 'react'
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
         <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
      <h1> Login Page </h1>
    </div>
  )
}

export default Login
