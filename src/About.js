import React from "react";
import img from './images/photo.png'
import { Link ,NavLink} from "react-router-dom";

function About(props){

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
        <img src="https://images.freeimages.com/images/large-previews/f6c/colorful-paint-1174055.jpg" />
        </>
    )
}

export default About;