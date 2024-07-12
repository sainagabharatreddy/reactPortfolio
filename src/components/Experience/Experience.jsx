import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="experience">
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>
          10+
        </div>
        <span style={{ color: darkMode ? 'white' : '' }}>completed</span>
        <span>Projects with Hands Of Experience</span>
      </div>
      <div className="description">
        <p className="animate-text">Working with projects is like giving me amaze.</p>
        <p className="animate-text">Innovation and creativity drive my success.</p>
        <p className="animate-text">Every project is a new adventure.</p>
      </div>
    </div>
  );
};

export default Experience;
