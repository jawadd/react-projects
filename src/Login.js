import React from 'react'
import { Link,NavLink,useParams,useLocation } from "react-router-dom";


const Login = () => {
  const {fname,lname}= useParams();
  const location = useLocation();
  
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

      <h1> Hello {fname} {lname} </h1>
      <h1> You are currently on {location.pathname} location  </h1>
    </div>
  )
}

export default Login
