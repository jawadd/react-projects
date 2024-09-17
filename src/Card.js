import React from "react";
import img from './images/m1.jpg'
import './index.css'

function Card(props){
    return(
       
        <div className="card">
            <img src={props.img} alt="Nature"></img>
            <h3>{props.title}</h3>
        </div>
    )
}

export default Card