import React from "react";
import logo from "../assets/logo.png";
import "../style/main.css"

const Navbar =()=> {
    return(
        <div id="Navbar">
            <div className="Container">
                <div className="main">
                    <img src={logo} />
                </div>
                <div className="second">
                    <h2>Produk</h2>
                    <h2>Kontak</h2>
                    <h2>Tentang</h2>

                </div>
            </div>
        </div>
    )

}

export default Navbar