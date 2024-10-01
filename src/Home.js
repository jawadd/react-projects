import React from "react";
import { Link, NavLink } from "react-router-dom";
import './index.css';

const Home = () => {
    return (
        <React.Fragment> 
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
        
        <h1>Home Page</h1>
        </React.Fragment>
    );
}

export default Home;
