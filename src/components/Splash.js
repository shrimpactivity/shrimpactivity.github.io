import React from "react";
import PropTypes from "prop-types";

import Portrait from '../assets/portrait.jpg'

import "../styles/splash.css";

const Splash = (props) => {
  return (
    <div className="splash-container">
      <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", flexWrap: 'wrap'}}>
        <div className="splash-content">
          <div className="name-intro" style={{ fontSize: "2rem" }}>Hey, it's</div>
          <div className="name-container first-name">
            Carson
          </div>
          <div className="name-container last-name">
            Crow
          </div>
        </div>
        <div className="splash-content"><img src={Portrait} className="portrait"/></div>
      </div>
      <div className="splash-content">
        <span>I'm a full stack software developer.</span>
      </div>
    </div>
  );
};

Splash.propTypes = {};

export default Splash;
