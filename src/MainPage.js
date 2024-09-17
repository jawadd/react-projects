import React from "react";
import Card from "./Card";
import './index.css'
import img1 from './images/m1.jpg'
import img2 from './images/m2.jpg'
import img3 from './images/m3.jpg'
import img4 from './images/m4.jpg'
import img5 from './images/photo.png'
function MainPage(){
    return(
        <>
        <h1 className="heading">Main Page</h1>
        <div className="cardComp">
        <Card title='Nature image 1' img={img1} /> 
        <Card  title='Nature image 2' img={img2} />
        <Card title='Nature image 3' img={img3} />
        <Card  title='Nature image 4' img={img4} />
        <Card  title='Nature image 5' img={img5} />
        </div>
        </>
    )
}

export default MainPage