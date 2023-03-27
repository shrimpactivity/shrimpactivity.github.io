import React from "react";

import Title from "./Title";
import ScrollButton from "../ScrollButton";
import Portrait from "../../assets/portrai-sepia.jpg";

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
          <img className="portrait" src={Portrait} alt="Picture of me and my dog, Daisy."/>
        </div>
      </div>
      <div className="splash-about">
        I'm a <b>full stack software engineer</b> with a background in math and
        years of experience building vibrant apps.
      </div>
      <div className="down-caret">
        <ScrollButton to="menu-scroll"/>
      </div>
    </div>
  );
};

export default Splash;
