import React from 'react'
import { NavLink,useParams,useLocation } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


const Login = () => {
  const {fname,lname}= useParams();
  
  
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
    
      <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
    </div>
  )
}

export default Login
