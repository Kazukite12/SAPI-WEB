import React from "react";
import logo from "../assets/logo.png";
import "../style/main.css";
import { Link } from "react-router-dom";

const Navbar =()=> {
    return(
        <div id="Navbar">
            <div className="Container">
                <div className="main">
                    <Link to="/">
                        <img src={logo} />
                    </Link>
                </div>
                <div className="second">
                    <Link to="/produk">
                        <h2>Produk</h2>
                    </Link>
                    <h2>Kontak</h2>

                </div>
            </div>
        </div>
    )

}

export default Navbar