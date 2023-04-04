import React from "react";

import LinkedInIcon from "../../../assets/icons/linked-in.png";
import GithubIcon from "../../../assets/icons/github-mark-white.png";
import ResumeDownload from "../../buttons/ResumeDownload";


const Connect = (props) => {
  return (
    <div className="menu-content connect-tab">
      <div style={{ textAlign: "center" }}>
        Email me:{" "}
        <a style={{ color: "inherit" }} href="mailto:carsoncrow@pm.me">
          carsoncrow@pm.me
        </a>
      </div>
      <div style={{ textAlign: "center" }}>
        Find me on:
        <span className="link-icon">
          <a
            href="https://www.linkedin.com/in/carson-crow-29b83b254/"
            target="_blank"
          >
            <img src={LinkedInIcon} height="30px" width="30px" alt="linked in link"/>
          </a>
        </span>
        <span className="link-icon">
          <a
            href="https://github.com/shrimpactivity"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GithubIcon} height="30px" width="30px" alt="github link"/>
          </a>
        </span>
      </div>
      <ResumeDownload />
    </div>
  );
};

export default Connect;
