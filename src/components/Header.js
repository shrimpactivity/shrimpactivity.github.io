import React from "react";

import LinkedInIcon from "../assets/linked-in.png";
import GithubIcon from "../assets/github-mark-white.png";

import "../styles/header.css";

const Header = (props) => {
  return (
    <div className="links-container">
      <div>
        <a
          href="https://www.linkedin.com/in/carson-crow-29b83b254/"
          target="_blank"
        >
          <img src={LinkedInIcon} height="30px" width="30px" />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/shrimpactivity"
          target="_blank"
        >
          <img src={GithubIcon} height="30px" width="30px" />
        </a>
      </div>
      <div><span>Resume &#x2B07;</span></div>
    </div>
  );
};

export default Header;
