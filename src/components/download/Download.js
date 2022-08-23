import React, { useEffect } from "react";
import "./Download.css";
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="download">
      <div className="container download" data-aos="fade-up">
        
        <IconContext.Provider value={{ size: "15" }}>
          <div className="download-icons">
            
            <div className="download-icon">
              <GrAndroid /> <p>"é preciso ter já aprendido muitas coisas para saber perguntar aquilo que se não sabe."</p>
            </div>
            <h2>JJ Rousseau</h2>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Download;
