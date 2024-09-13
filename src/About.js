import React from "react";

function About(props){

    return (
        <>
        <h1>About page</h1>
        <h2> Created by: {props.name}</h2>
        </>
    )
}

export default About;