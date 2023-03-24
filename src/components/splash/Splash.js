import React from "react";
import { Link } from "react-scroll";

import Title from "./Title";
import Portrait from "../../assets/portrai-sepia.jpg";
import ArrowDown from "../../assets/caret-down.png";

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
          <img className="portrait" src={Portrait} />
        </div>
      </div>
      <div className="splash-about">
        I'm a <b>full stack software engineer</b> with a math background and
        years of experience building vibrant apps.
      </div>
      <div className="down-caret">
        <Link to="menu-scroll" smooth={true}>
          <img src={ArrowDown} />
        </Link>
        
        </div>
    </div>
  );
};

export default Splash;
