import React, { useEffect } from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/phone-features.png";
import Feature from "./Feature";
import { FeatureList } from "./data";
import dan from "../../assets/5.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="features">
      <div className="container features">
        <div className="title" data-aos="fade-up">
          
          <h2>Metodologia GreatPeople</h2>
          
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
          <h2>Insight Atuais</h2>
          </div>
          <div className="features-right" data-aos="fade-left">
          <h2>Novas Ferramentas</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
