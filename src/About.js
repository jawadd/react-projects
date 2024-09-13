import React from "react";
import img from './images/photo.png'

function About(props){

    return (
        <>
        <h1>About page</h1>
        <h2> Created by: {props.name}</h2>
        <img src={require('./images/photo.png')} />
        </>
    )
}

export default About;