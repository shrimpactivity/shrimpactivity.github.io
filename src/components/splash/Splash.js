import React from "react";

import Title from "./Title";
import ScrollButton from "../buttons/ScrollButton";
import Portrait from "../../assets/portrait-sepia.jpg";

import "../../styles/splash.css";

const Splash = () => {
  return (
    <div className="splash-container">
      <div
        className="splash-header"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <Title />
        </div>
        <div className="portrait-container">
          <img className="portrait" src={Portrait} alt="Me and my dog, Daisy."/>
        </div>
      </div>
      <div className="splash-about">
        I'm a full stack software engineer with a background in math and
        years of experience building vibrant apps.
      </div>
      <div className="down-caret">
        <ScrollButton to="menu-scroll"/>
      </div>
    </div>
  );
};

export default Splash;
