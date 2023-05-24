import React from "react";
import "../style/main.css";
import sate from "../assets/sate.png"
import wave from "../assets/wave.svg"
import Footer from "./footer";

const Home =()=> {
    return(
        <>
        <div id="Home">
            <div className="Container">
                <div className="description">
                    <h2>Sate Pisang</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid officiis amet, velit quaerat quisquam dolores Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero aliquam sed veniam rerum placeat aut quia sequi eveniet nemo.</p>
                    <h2 className="main-button">Order Now</h2>
                </div>
                <div className="hero">
                    <img src={sate} />
                </div>
            </div>
        </div>
        <Footer />
       </> 
    )
}

export default Home