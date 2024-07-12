import React from "react";
import "./About.css";
const cursorIcon = 'data:image/png;base64,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'

const About = () => {
  return (
    <section className="container" id="about">
      <h2 className="title">About</h2>
      <div className="content">
        <img
          src={"http://localhost:5173/assets/about/aboutImage.png"}
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
                and optimized sites
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img src={cursorIcon} alt="Server icon" />
            <div className="aboutItemText">
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimized backend systems
                and APIs
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img src={cursorIcon} alt="UI icon" />
            <div className="aboutItemText">
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;