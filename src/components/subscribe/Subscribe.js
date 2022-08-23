import React, { useEffect } from "react";
import "./Subscribe.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
        <h2>Quer ficar por dentro das novidades?</h2>
        <form>
          <div className="form-control">
            <input type="text" placeholder="Email..." />
            <button>Subscribe</button>
          </div>
        </form>
        <div className="social-icons">
        <a href="https://www.linkedin.com/company/the-turing">
          <div className="social-icon">
          <FaLinkedin />
          </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
