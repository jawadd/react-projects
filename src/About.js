import React from "react";
import img from './images/photo.png'
import { Link ,NavLink, useNavigate} from "react-router-dom";

function About(props){

    const navigate= useNavigate();
    const goContact = () =>{
        navigate('/contact')
    }

    return (
        <>
        
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                
            </ul>
        </nav>

        <h1>About page</h1>
        <button onClick={goContact}> 
            Go to Contact
        </button>
        </>
    )
}

export default About;