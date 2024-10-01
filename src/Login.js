import React from 'react'
import { Link,NavLink } from "react-router-dom";


const Login = () => {
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

      <h1> Login Page </h1>
    </div>
  )
}

export default Login
