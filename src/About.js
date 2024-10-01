import React from "react";
import img from './images/photo.png'
import { Link } from "react-router-dom";

function About(props){

    return (
        <>
        
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
        <h1>About page</h1>
        <img src="https://images.freeimages.com/images/large-previews/f6c/colorful-paint-1174055.jpg" />
        </>
    )
}

export default About;