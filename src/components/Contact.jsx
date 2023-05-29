import react from "react";
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import tiktok from "../assets/tiktok.svg"
import whatsapp from "../assets/whatsapp.svg"
import Footer from "./footer";


const Contact =()=> {
    return(
        <div className="container-contact">
            <h1>Contact Us</h1>
            <div className="contact-row">
                <div className="contact-card">
                    <img src={facebook} />
                    <h2>sapi hits</h2>
                </div>
                <div className="contact-card">
                    <img src={instagram} />
                    <h2>@sapi_hits</h2>
                </div>
                <div className="contact-card">
                    <img src={tiktok} />
                    <h2>sapi_hits</h2>
                </div>
                <div className="contact-card">
                    <img src={whatsapp} />
                    <h2>085156234239</h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact