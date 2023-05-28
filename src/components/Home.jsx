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
                    <p>Sate Pisang Hits merupakan produk yang ditawarkan kepada calon konsumen berupa perpaduan roti dengan pisang yang diberikan varian rasa yang membuat anda merasakan perpaduan yang sungguh nikmat saat memakannya.</p>
                    <h2 className="main-button">Order Now</h2>
                </div>
                <div className="hero">
                    <img src={sate} />
                </div>
            </div>
            <div className="Container" style={{marginTop:90}}>
                <div className="about">
                    <h2>About Us</h2>
                    <p>Konsep dari produk ini adalah membuat kantong aman, perut kenyang, hati senang dengan menggunakan bahan-bahan yang berkualitas, proses pembuatan yang higienis sehingga menjaga kualitas produk dan menjamin kesehatan para konsumen. enis pisang yang ditawarkan dalam produk ini menggunakan bahan utama pisang kepok, serta varian rasa seperti: Bubble Gum, Coklat, Tiramisu, dan Mactha dengan tambahan toping seperti : Keju, Oreo dan Biskuit.</p>
    
                </div>

            </div>
        </div>
        <Footer />
       </> 
    )
}

export default Home