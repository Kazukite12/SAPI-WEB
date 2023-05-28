import React from "react";
import Sapi from "../assets/sate.png"
import Footer from "./footer";

const Product =()=> {
    return (
        <div>
            <div className="Container-produk">
            <h1>Sapi Variants</h1>
                <div className="card-row" >
                    
                    <div className="card">
                      <h2>Matcha</h2>
                      <p>Sate pisang varian matcha adalah paduan sempurna antara manisnya pisang dan aroma khas matcha. Setiap tusukan sate pisang ini dilapisi dengan bubuk matcha berkualitas tinggi yang memberikan cita rasa unik dan menyegarkan. Sate pisang matcha ini cocok untuk para pecinta teh hijau dan pencinta makanan manis dengan sentuhan rempah yang lezat.</p>
                    </div>
                    <div className="card">
                        <h2>Coklat</h2>
                        <p>Sate pisang coklat adalah kombinasi menggoda antara manisnya pisang yang matang dengan lezatnya coklat. Setiap tusukan sate pisang ini dilapisi dengan lapisan coklat leleh yang memberikan cita rasa gurih dan nikmat. Sate pisang coklat ini adalah pilihan sempurna bagi para penggemar coklat yang ingin menikmati kombinasi lezat pisang dan coklat dalam setiap gigitannya.</p>
                    </div>
                    <div className="card">
                        <h2>Tiramisu</h2>
                        <p>Sate pisang varian tiramisu merupakan perpaduan menarik antara manisnya pisang dengan cita rasa khas tiramisu. Setiap tusukan sate pisang ini dilapisi dengan campuran rempah tiramisu yang memberikan sentuhan kopi, coklat, dan keju yang khas. Sate pisang tiramisu ini cocok untuk para pecinta makanan penutup dan pencinta cita rasa kopi yang ingin merasakan sensasi baru dalam menikmati pisang.</p>
                    </div>
                    <div className="card">
                        <h2>Blackforest</h2>
                        <p>Sate pisang varian blackforest menghadirkan kombinasi menggoda antara manisnya pisang dengan kelezatan blackforest. Setiap tusukan sate pisang ini dilapisi dengan campuran coklat hitam, krim, dan ceri yang menciptakan perpaduan harmonis antara manis, asam, dan gurih. Sate pisang blackforest ini adalah pilihan yang sempurna bagi pecinta kue blackforest yang ingin menikmati sensasi baru dengan pisang yang lezat.</p>

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )   
}

export default Product