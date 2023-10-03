import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../style/main.css";
import { Link } from "react-router-dom";

const Navbar =()=> {
    const [sideBar,setSideBar] = useState(false)

    const [navbar, setNavbar] = useState(false)

    const changeNavbar = () => {
        if (window.scrollY >= 40) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeNavbar)

    return(
        <div id="Navbar">
            <div className={navbar ? "Container sticky":"Container"}>
                <div className="main">
                    <Link to="/">
                        <img src={logo} />
                    </Link>
                </div>
                <div className="second">
                    <Link to="/produk">
                        <h2>Produk</h2>
                    </Link>
                    <Link to="/Kontak">

                      <h2>Kontak</h2>

                    </Link>

                </div>
            </div>
            <div className={navbar ? "burger-nav sticky":"burger-nav"}>
                 <Link to="/">
                        <img src={logo} />
                    </Link>
                <div className="burger" onClick={()=>setSideBar(true)}>
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                </div>
                <div className={sideBar ? "side-bar-show":"side-bar"}>
                    <div className="exit" onClick={()=>setSideBar(false)}>
                        <h2>x</h2>
                    </div>
                    <div className="side-list">
                        <Link to="/produk" onClick={()=>setSideBar(false)}>
                            <h2>Produk</h2>
                        </Link>
                        <Link to="/Kontak" onClick={()=>setSideBar(false)}>

                        <h2>Kontak</h2>

                        </Link>

                    </div>


                </div>
            </div>
        </div>
    )

}

export default Navbar