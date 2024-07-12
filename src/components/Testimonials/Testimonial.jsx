import React from "react";
import "./Testimonial.css";
import cursorIcon from "../About/about/cursorIcon.png";
import aboutImage from "../About/about/aboutImage.png";
import serverIcon from "../About/about/serverIcon.png";
import uiIcon from "../About/about/uiIcon.png";

const Testimonial = () => {
  return (
    <section className="container" id="about">
      <h2 className="title">About</h2>
      <div className="content">
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className="aboutImage"
        />
        <ul className="aboutItems">
          <li className="aboutItem">
            <img src={cursorIcon} alt="Cursor icon" />
            <div className="aboutItemText">
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img src={serverIcon} alt="Server icon" />
            <div className="aboutItemText">
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimized backend systems
                and APIs.
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img src={uiIcon} alt="UI icon" />
            <div className="aboutItemText">
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonial;
