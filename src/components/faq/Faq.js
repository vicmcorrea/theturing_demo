import React, { useEffect } from "react";
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import gptw from "../../components/faq/gptw.png";
import jungle from "../../components/faq/jungle.png";
import soc from "../../components/faq/soc.png";
import weego from "../../components/faq/weego.png";
import you from "../../components/faq/you.png";
import healthy from "../../components/faq/healthy.png";
import up from "../../components/faq/up.png";
const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: {
    items: 2,
  },
  512: {
    items: 4,
  },
};

const items = [
  <div className="item">
      <img src={gptw} alt="GPTW" />
    </div>,
    <div className="item">
      <img src={jungle} alt="jungle" />
    </div>,
    <div className="item">
    <img src={soc} alt="turing" />
  </div>,
     <div className="item">
     <img src={weego} alt="turing" />
   </div>,
   <div className="item">
   <img src={you} alt="turing" />
 </div>,
  <div className="item">
  <img src={healthy} alt="turing" />
</div>,
<div className="item">
  <img src={up} alt="turing" />
</div>,

];

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="faq">
      <div className="container faq">
        <div className="u-title" data-aos="fade-up">
        <h1 style={{ fontSize:"30px",margin_bottom:"20px", textAlign: "center" }}>Partners</h1>
      
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlay
          controlsStrategy="alternate"
        />
         
        </div>
      </div>
    </section>
  );
};

export default Faq;
