import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const Home = () => {
    return (
        <React.Fragment> 
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
        <h1>Home Page</h1>
        </React.Fragment>
    );
}

export default Home;
