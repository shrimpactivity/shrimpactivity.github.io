import React from "react";

import LinkedInIcon from "../../assets/icons/linked-in.png";
import GithubIcon from "../../assets/icons/github-mark-white.png";
import ArrowDown from "../../assets/icons/arrow-down.png";

import "../../styles/header.css";

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="link-icon">
        <a
          href="https://www.linkedin.com/in/carson-crow-29b83b254/"
          target="_blank"
        >
          <img src={LinkedInIcon} height="30px" width="30px" alt="linked in link"/>
        </a>
      </div>
      <div className="link-icon">
        <a
          href="https://github.com/shrimpactivity"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GithubIcon} height="30px" width="30px" alt="github link"/>
        </a>
      </div>
      <div className="resume-download">
        <span>Download CV TODO: link file</span>
        <img src={ArrowDown} height="30px" alt="resume download button"/>
      </div>
    </div>
  );
};

export default Header;
